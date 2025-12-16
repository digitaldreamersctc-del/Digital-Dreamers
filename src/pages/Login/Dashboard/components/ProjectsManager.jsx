import { useState } from 'react'
import { useAuth } from '../../../../hooks/useAuth'
import { useProjects } from '../../../../hooks/useProjects'

export default function ProjectsManager() {
  const { user } = useAuth()
  const { projects, loadingProjects, error, createProject, updateProject, removeProject } =
    useProjects(user) 

  const [form, setForm] = useState({ title: '', description: '' })
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({ title: '', description: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onChangeEdit = (e) =>
    setEditForm({ ...editForm, [e.target.name]: e.target.value })

  const startEditing = (project) => {
    setEditingId(project.id)
    setEditForm({ title: project.title, description: project.description || '' })
  }
  const cancelEdit = () => setEditingId(null)

  const handleCreateProject = async (e) => {
    e.preventDefault()
    if (!form.title.trim()) return
    try {
      await createProject(form)
      setForm({ title: '', description: '' })
    } catch (err) {
      console.error(err)
    }
  }

  const saveEdit = async () => {
    if (!editingId) return
    try {
      await updateProject(editingId, editForm)
      setEditingId(null)
    } catch (err) {
      console.error(err)
    }
  }

  const deleteProject = async (id) => {
    if (!confirm('¿Eliminar este proyecto?')) return
    try {
      await removeProject(id)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#281e76]">
        Mis proyectos
      </h2>

      {error && (
        <p className="mb-4 text-red-700 font-medium text-sm sm:text-base">
          {error}
        </p>
      )}

      {/* FORMULARIO */}
      <form
        onSubmit={handleCreateProject}
        className="mb-6 bg-white p-5 rounded-2xl shadow-md flex flex-col gap-3 sm:gap-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          className="w-full border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb60f1]"
          placeholder="Título"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={onChange}
          className="w-full border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb60f1]"
          placeholder="Descripción"
        />
        <button
          type="submit"
          className="self-start bg-[#cb60f1] text-white px-5 py-2 sm:py-3 rounded-lg hover:bg-[#a148d1] transition-colors font-medium"
        >
          Agregar proyecto
        </button>
      </form>

      {loadingProjects ? (
        <p className="text-gray-600">Cargando proyectos...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-500">No tienes proyectos aún.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((p) => (
            <li
              key={p.id}
              className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all"
            >
              {editingId === p.id ? (
                <div className="flex flex-col gap-3">
                  <input
                    name="title"
                    value={editForm.title}
                    onChange={onChangeEdit}
                    className="w-full border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb60f1]"
                  />
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={onChangeEdit}
                    className="w-full border border-gray-300 p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cb60f1]"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      className="bg-[#493D9E] text-white px-4 py-2 rounded-lg hover:bg-[#352C7A] transition-colors"
                    >
                      Guardar
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                  <div>
                    <h3 className="font-semibold text-[#281e76] text-lg">
                      {p.title}
                    </h3>
                    {p.description && (
                      <p className="text-gray-600 text-sm sm:text-base mt-1">
                        {p.description}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button
                      onClick={() => startEditing(p)}
                      className="text-[#493D9E] hover:text-[#281e76] font-medium transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteProject(p.id)}
                      className="text-red-600 hover:text-red-800 font-medium transition"
                    >
                      Eliminar
                    </button>
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