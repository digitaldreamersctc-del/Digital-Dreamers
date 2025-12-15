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

export function useTasks(user) {
  const [tasks, setTasks] = useState([])
  const [loadingTasks, setLoadingTasks] = useState(true)
  const [error, setError] = useState(null)

  const fetchTasks = useCallback(async () => {
    if (!user) {
      setTasks([])
      setLoadingTasks(false)
      return
    }

    try {
      setLoadingTasks(true)
      setError(null)

      const q = query(
        collection(db, 'tasks'),
        where('createdBy', '==', user.uid),
      )

      const snapshot = await getDocs(q)
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    } catch (err) {
      console.error('Error al cargar tareas:', err)
      setError('No se pudieron cargar las tareas')
    } finally {
      setLoadingTasks(false)
    }
  }, [user])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const createTask = async (task) => {
    try {
      await addDoc(collection(db, 'tasks'), {
        ...task,
        createdBy: user.uid,
        createdAt: new Date(),
      })
      fetchTasks()
    } catch (err) {
      console.error('Error al crear tarea:', err)
      setError('No se pudo crear la tarea')
      throw err
    }
  }

  const updateTask = async (id, data) => {
    try {
      await updateDoc(doc(db, 'tasks', id), data)
      fetchTasks()
    } catch (err) {
      console.error('Error al actualizar tarea:', err)
      setError('No se pudo actualizar la tarea')
      throw err
    }
  }

  const removeTask = async (id) => {
    try {
      await deleteDoc(doc(db, 'tasks', id))
      fetchTasks()
    } catch (err) {
      console.error('Error al eliminar tarea:', err)
      setError('No se pudo eliminar la tarea')
      throw err
    }
  }

  return {
    tasks,
    loadingTasks,
    error,
    createTask,
    updateTask,
    removeTask,
  }
}
