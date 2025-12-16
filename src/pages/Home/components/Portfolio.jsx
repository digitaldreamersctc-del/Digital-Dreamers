import { useState } from 'react'
import projectsData from '../../../components/data/projects.json'

export default function Portfolio() {
  const [filtro, setFiltro] = useState('Todos')
  const [openProject, setOpenProject] = useState(null)

  const categorias = ['Todos', 'Diseño Web', 'App', 'Web']

  const proyectosFiltrados =
    filtro === 'Todos'
      ? projectsData
      : projectsData.filter((p) => p.category === filtro)

  return (
    <section className="p-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-5xl text-center text-[#281e76] font-[Concert_One] py-2">
          🚀 Portafolio Digital Dreamers
        </h2>

        <p className="text-center text-[#493D9E] font-[Merienda] font-semibold text-xl py-2">
          Proyectos que combinan creatividad, organización y tecnología
        </p>

        {/* Filtros */}
        <div className="flex justify-center flex-wrap gap-4 mb-10 py-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filtro === cat
                  ? 'bg-[#281e76] text-white'
                  : 'bg-white text-[#493D9E] border border-[#281e76] hover:border-[#cb60f1] hover:text-[#cb60f1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {proyectosFiltrados.map((proyecto) => (
            <div
              key={proyecto.id}
              onClick={() => setOpenProject(proyecto)}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition"
            >
              {/* Categoría */}
              <span className="absolute left-3 top-3 bg-white/80 text-sm px-3 py-1 rounded-full backdrop-blur">
                {proyecto.category}
              </span>

              <img
                src={proyecto.image}
                alt={proyecto.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#493D9E] mb-2">
                  {proyecto.title}
                </h3>

                <p className="text-gray-700 mb-3 text-md">
                  {proyecto.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2">
                  {proyecto.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#ffee98] text-[#281e76] text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openProject && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setOpenProject(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-[#281e76]">
                    {openProject.title}
                  </h3>
                  <button
                    onClick={() => setOpenProject(null)}
                    className="text-gray-500 hover:text-gray-800"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-gray-700 mt-4">
                  {openProject.details}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {openProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#DAD2FF] text-[#281e76] text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={openProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#281e76] text-white"
                  >
                    Abrir proyecto
                  </a>
                  <button
                    onClick={() => setOpenProject(null)}
                    className="px-4 py-2 rounded-lg border"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}