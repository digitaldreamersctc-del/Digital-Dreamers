// /src/hooks/useProjects.js
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  onSnapshot,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { db } from "../firebase";

export function useProjects(user) {
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      setProjects([]);
      setLoadingProjects(false);
      return;
    }

    setLoadingProjects(true);
    const projectsRef = collection(db, "users", user.uid, "projects");
    const q = query(projectsRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoadingProjects(false);
      },
      (err) => {
        console.error("Error al cargar proyectos:", err);
        setError(err.message || "Error al cargar proyectos");
        setLoadingProjects(false);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const createProject = async (data) => {
    if (!user) throw new Error("Usuario no logeado");
    try {
      const docRef = await addDoc(collection(db, "users", user.uid, "projects"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      return docRef;
    } catch (err) {
      console.error("Error creando proyecto:", err);
      setError(err.message || "Error al crear proyecto");
      throw err;
    }
  };

  const updateProject = async (id, data) => {
    if (!user) throw new Error("Usuario no logeado");
    try {
      const docRef = doc(db, "users", user.uid, "projects", id);
      await updateDoc(docRef, data);
    } catch (err) {
      console.error("Error actualizando proyecto:", err);
      setError(err.message || "Error al actualizar proyecto");
      throw err;
    }
  };

  const removeProject = async (id) => {
    if (!user) throw new Error("Usuario no logeado");
    try {
      const docRef = doc(db, "users", user.uid, "projects", id);
      await deleteDoc(docRef);
    } catch (err) {
      console.error("Error eliminando proyecto:", err);
      setError(err.message || "Error al eliminar proyecto");
      throw err;
    }
  };

  return { projects, loadingProjects, error, createProject, updateProject, removeProject };
}