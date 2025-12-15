import { useState } from 'react'
import { useAuth } from '../../../../hooks/useAuth'
import { useTasks } from '../../../../hooks/useTasks'

export default function TasksManager() {
  const { user } = useAuth()

  const { tasks, loadingTasks, error, createTask, updateTask, removeTask } =
    useTasks(user)

  // UI state
  const [form, setForm] = useState({ title: '', description: '' })
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({ title: '', description: '' })

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onChangeEdit = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value })
  }

  const startEditing = (task) => {
    setEditingId(task.id)
    setEditForm({
      title: task.title,
      description: task.description || '',
    })
  }

  const cancelEdit = () => {
    setEditingId(null)
  }

  const handleCreateTask = async (e) => {
    e.preventDefault()
    if (!form.title.trim()) return

    try {
      await createTask(form)
      setForm({ title: '', description: '' })
    } catch (err) {
      console.error(err)
    }
  }

  const saveEdit = async () => {
    if (!editingId) return
    try {
      await updateTask(editingId, editForm)
      setEditingId(null)
    } catch (err) {
      console.error(err)
    }
  }

  const deleteTask = async (id) => {
    if (!confirm('¿Eliminar esta tarea?')) return
    try {
      await removeTask(id)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Mis tareas</h2>

      {error && <p className="mb-4 text-red-600 font-medium">{error}</p>}

      {/* FORMULARIO */}
      <form
        onSubmit={handleCreateTask}
        className="mb-6 bg-gray-50 p-4 rounded-lg shadow"
      >
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          className="w-full border p-2 rounded mb-2"
          placeholder="Título"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          className="w-full border p-2 rounded mb-2"
          placeholder="Descripción"
        />
        <button className="bg-purple-300 text-white px-4 py-2 rounded">
          Agregar tarea
        </button>
      </form>

      {loadingTasks ? (
        <p>Cargando tareas...</p>
      ) : tasks.length === 0 ? (
        <p>No tienes tareas aún.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((t) => (
            <li key={t.id} className="p-3 bg-white border rounded shadow-sm">
              {editingId === t.id ? (
                <div>
                  <input
                    name="title"
                    value={editForm.title}
                    onChange={onChangeEdit}
                    className="w-full border p-2 rounded mb-2"
                  />
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={onChangeEdit}
                    className="w-full border p-2 rounded mb-2"
                  />
                  <div className="flex gap-2">
                    <button onClick={saveEdit}>Guardar</button>
                    <button onClick={cancelEdit}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between">
                  <div>
                    <h3>{t.title}</h3>
                    {t.description && <p>{t.description}</p>}
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => startEditing(t)}>Editar</button>
                    <button onClick={() => deleteTask(t.id)}>Eliminar</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
