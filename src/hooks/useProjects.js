import { useState, useEffect, useCallback } from 'react'
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../firebase'

export function useProjects(user) {
  const [projects, setProjects] = useState([])
  const [loadingProjects, setLoadingProjects] = useState(true)
  const [error, setError] = useState(null)

  const fetchProjects = useCallback(async () => {
    if (!user) {
      setProjects([])
      setLoadingProjects(false)
      return
    }

    try {
      setLoadingProjects(true)
      setError(null)

      const q = query(
        collection(db, 'projects'),
        where('createdBy', '==', user.uid),
      )

      const snapshot = await getDocs(q)
      setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    } catch (err) {
      console.error('Error al cargar proyectos:', err)
      setError('No se pudieron cargar los proyectos')
    } finally {
      setLoadingProjects(false)
    }
  }, [user])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const createProject = async (project) => {
    try {
      await addDoc(collection(db, 'projects'), {
        ...project,
        createdBy: user.uid,
        createdAt: new Date(),
      })
      fetchProjects()
    } catch (err) {
      console.error('Error al crear proyecto:', err)
      setError('No se pudo crear el proyecto')
      throw err
    }
  }

  const updateProject = async (id, data) => {
    try {
      await updateDoc(doc(db, 'projects', id), data)
      fetchProjects()
    } catch (err) {
      console.error('Error al actualizar proyecto:', err)
      setError('No se pudo actualizar el proyecto')
      throw err
    }
  }

  const removeProject = async (id) => {
    try {
      await deleteDoc(doc(db, 'projects', id))
      fetchProjects()
    } catch (err) {
      console.error('Error al eliminar proyecto:', err)
      setError('No se pudo eliminar el proyecto')
      throw err
    }
  }

  return {
    projects,
    loadingProjects,
    error,
    createProject,
    updateProject,
    removeProject,
  }
}