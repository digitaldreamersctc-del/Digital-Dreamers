import { useState, useEffect } from 'react'
import { db } from '../../../firebase'
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'

export default function CommentForm() {
  const [texto, setTexto] = useState('')
  const [autor, setAutor] = useState('')
  const [comentarios, setComentarios] = useState([])
  const [loading, setLoading] = useState(true)

  // Escucha en tiempo real los comentarios
  useEffect(() => {
    const q = query(collection(db, 'testimonios'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setComentarios(data)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!autor.trim() || !texto.trim()) return

    await addDoc(collection(db, 'testimonios'), {
      texto,
      autor,
      destacado: false,
      createdAt: serverTimestamp(),
    })

    setTexto('')
    setAutor('')
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8 px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFF2AF] p-6 rounded-2xl shadow-md space-y-4"
      >
        <h2 className="text-3xl font-[Merienda] font-bold text-[#493D9E] text-center mb-4">
          Déjanos tu comentario
        </h2>
        <input
          placeholder="Tu nombre"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          required
          className="w-full px-4 py-3 border-2 border-[#493D9E] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A89FFF] placeholder-gray-400"
        />

        <textarea
          placeholder="Escríbenos un comentario..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          required
          rows={5}
          className="w-full px-4 py-3 border-2 border-[#493D9E] rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#A89FFF] placeholder-gray-400"
        />

        <button
          type="submit"
          className="w-full bg-[#493D9E] text-white py-3 rounded-xl font-semibold hover:bg-[#6C5BD2] transition-all duration-300"
        >
          Enviar comentario
        </button>
      </form>

      {/* Lista de comentarios */}
      <div className="space-y-4">
        {loading ? (
          <p className="text-center text-gray-500">Cargando comentarios...</p>
        ) : comentarios.length === 0 ? (
          <p className="text-center text-gray-500">
            Sé el primero en comentar 😊
          </p>
        ) : (
          comentarios.map((c) => (
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
