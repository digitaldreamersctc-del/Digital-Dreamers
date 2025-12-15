import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../../firebase'

export default function AddTaskForm() {
  const [task, setTask] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!task.trim()) {
      setErrorMsg(' El nombre de la tarea es obligatorio.')
      return
    }

    setLoading(true)
    try {
      await addDoc(collection(db, 'tasks'), {
        name: task.trim(),
        created: serverTimestamp(),
        completed: false,
      })
      setTask('') //Limpiar el imput
    } catch (err) {
      setErrorMsg('No se pudo guardar la tarea. Intenta de nuevo')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Ejemplo Preparar el pitch del equipo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-emerald-600 disabled:opacity-60 text-white rounded-xl px-4 py-2 hover:bg-emerald-700 transition"
      >
        {loading ? 'Guardando... ' : 'Agregar tarea'}
      </button>
      {errorMsg && !loading && (
        <p className="text-xs text-slate-500">
          Tip: Verifica en Firebase consola - Firestore - colección <b>tasks</b>
          .
        </p>
      )}
    </form>
  )
}
