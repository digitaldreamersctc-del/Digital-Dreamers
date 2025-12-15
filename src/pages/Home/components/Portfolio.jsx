import { useState } from 'react'
import proyectosData from '../../../components/data/proyectos.json'

export default function Portfolio() {
  const [filtro, setFiltro] = useState('Todos')

  const categorias = ['Todos', 'Diseño Web', 'App', 'Web']

  const proyectosFiltrados =
    filtro === 'Todos'
      ? proyectosData
      : proyectosData.filter((p) => p.category === filtro)

  return (
    <section className="bg-gray-50 p-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-5xl text-center text-[#281e76] font-[Concert_One] py-2">
          <h2>🚀 Portafolio Digital Dreamers</h2>
        </div>
        <p className="text-center text-[#493D9E]  font-[Merienda] font-semibold text-xl py-2">
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
                  : 'bg-white text-[#493D9E] border border-[#281e76] hover:bg-[#B2A5FF]'
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
                <h3 className="text-xl font-semibold text-[#493D9E] mb-2">
                  {proyecto.title}
                </h3>

                <div className="absolute left-3 top-3 bg-white/70 text-sm px-3 py-1 rounded-full backdrop-blur">
                  {proyecto.category}
                </div>
                <p className="text-gray-700 mb-3 text-md">
                  {proyecto.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
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
      </div>
    </section>
  )
}
