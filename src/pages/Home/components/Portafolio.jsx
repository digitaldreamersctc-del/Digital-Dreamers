import { useState } from 'react'
import proyectosData from '../../../components/data/proyectos.json'

export default function Portafolio() {
  const [filtro, setFiltro] = useState('Todos')

  const categorias = ['Todos', 'Diseño Web', 'App', 'Web']

  const proyectosFiltrados =
    filtro === 'Todos'
      ? proyectosData
      : proyectosData.filter((p) => p.category === filtro)

  return (
    <section className="bg-gray-50 py-16" id="portafolio">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-5xl text-center text-[#281e76] font-[Concert_One] py-4">
          <h2>🚀 Portafolio Digital Dreamers</h2>
        </div>
        <p className="text-center text-[#281e76]  font-[Merienda] font-semibold text-xl py-4">
          Proyectos que combinan creatividad, organización y tecnología ✨
        </p>

        {/* Filtros */}
        <div className="flex justify-center flex-wrap gap-4 mb-10 py-4">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filtro === cat
                  ? 'bg-[#281e76] text-white'
                  : 'bg-white text-[#281e76] border border-[#281e76] hover:bg-[#B2A5FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {proyectosFiltrados.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={proyecto.image}
                alt={proyecto.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {proyecto.title}
                </h3>

                <p className="text-gray-600 mb-3 text-sm">
                  {proyecto.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-pink-100 text-[#281e76] text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Categoría */}
                <span className="text-xs text-gray-500">
                  Categoría: {proyecto.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
