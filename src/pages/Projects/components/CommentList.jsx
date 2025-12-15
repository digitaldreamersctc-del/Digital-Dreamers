import { useState } from 'react'

export default function CommentList({ comentarios, loading }) {
  const [filtro, setFiltro] = useState('')

  // Filtra comentarios según autor o texto
  const comentariosFiltrados = comentarios.filter(
    (c) =>
      c.autor.toLowerCase().includes(filtro.toLowerCase()) ||
      c.texto.toLowerCase().includes(filtro.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Input para filtrar */}
      <input
        type="text"
        placeholder="Filtrar comentarios por autor o texto..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        className="w-full px-4 py-3 border-2 border-[#493D9E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A89FFF] placeholder-gray-400 mb-4"
      />

      {/* Lista de comentarios */}
      <div className="space-y-4">
        {loading ? (
          <p className="text-center text-gray-500"> Cargando comentarios... </p>
        ) : comentariosFiltrados.length === 0 ? (
          <p className="text-center text-gray-500">
            {' '}
            No se encontraron comentarios :({' '}
          </p>
        ) : (
          comentariosFiltrados.map((c) => (
            <div
              key={c.id}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 space-y-2"
            >
              <p className="text-[#493D9E] font-medium">{c.texto}</p>
              <span className="text-gray-500 font-semibold text-sm">
                — {c.autor}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
