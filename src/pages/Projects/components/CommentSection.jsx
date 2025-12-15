import { useState, useEffect } from 'react'
import { db } from '../../../firebase'
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore'
import { useAuth } from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

export default function CommentSection() {
  const { user } = useAuth()

  const [comentarios, setComentarios] = useState([])
  const [loading, setLoading] = useState(true)

  const [texto, setTexto] = useState('')
  const [rating, setRating] = useState(0)

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')
  const [editRating, setEditRating] = useState(0)

  // Escuchar comentarios en tiempo real
  useEffect(() => {
    const q = query(collection(db, 'testimonios'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setComentarios(data)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  // Enviar comentario
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!texto.trim() || rating === 0) return

    await addDoc(collection(db, 'testimonios'), {
      texto,
      rating,
      userId: user.uid,
      userName: user.displayName || user.email,
      createdAt: serverTimestamp(),
      destacado: false,
    })

    setTexto('')
    setRating(0)
  }

  // Eliminar comentario
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'testimonios', id))
  }

  // Guardar edición
  const handleUpdate = async (id) => {
    await updateDoc(doc(db, 'testimonios', id), {
      texto: editText,
      rating: editRating,
    })

    setEditId(null)
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* 🔐 LOGIN */}
      {!user && (
        <Link
          to="/login"
          className="w-full bg-[#493D9E] text-white py-4 rounded-3xl font-semibold block text-center border border-[#2c2370] shadow-lg hover:bg-[#3c3190] transition-all duration-300"
        >
          Inicia sesión para dejar un comentario
        </Link>
      )}

      {/* 📝 FORMULARIO */}
      {user && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 border-2 border-[#493D9E] max-w-full mx-auto"
        >
          <h2 className="text-3xl font-[Merienda] font-bold text-[#493D9E] text-center mb-4">
            Deja un comentario
          </h2>

          {/* ⭐ Calificación con estrellas */}
          <div className="flex gap-3 justify-center text-4xl">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                onClick={() => setRating(n)}
                className={`cursor-pointer transition-all duration-200 transform hover:scale-125 ${n <= rating ? 'text-yellow-300' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            placeholder="Escribe tu comentario..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            rows={4}
            className="w-full px-5 py-4 border-2 border-[#493D9E] rounded-2xl shadow-md focus:outline-none focus:ring-4 focus:ring-[#493D9E]/40 transition-all resize-none"
          />

          <button
            type="submit"
            className="w-full bg-[#493D9E] text-white py-4 rounded-2xl border border-[#2c2370] shadow-lg hover:bg-[#3c3190] active:scale-95 transition-all duration-300"
          >
            Enviar
          </button>
        </form>
      )}

      {/* 📋 LISTA DE COMENTARIOS */}
      <h3 className="text-2xl font-semibold text-[#493D9E]">Comentarios</h3>

      {loading ? (
        <p className="text-gray-500 text-center">Cargando comentarios...</p>
      ) : comentarios.length === 0 ? (
        <p className="text-gray-500 text-center">No hay comentarios aún.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {comentarios.map((c) => {
            const fecha =
              c.createdAt?.toDate().toLocaleString('es-PE', {
                dateStyle: 'medium',
                timeStyle: 'short',
              }) || 'Fecha no disponible'

            const esPropietario = user && c.userId === user.uid

            // MODO EDICIÓN
            if (editId === c.id) {
              return (
                <div
                  key={c.id}
                  className="bg-white p-6 border-2 border-[#493D9E] rounded-2xl space-y-4 shadow-md sm:flex sm:flex-col"
                >
                  <div className="flex gap-2 text-2xl justify-center sm:justify-start">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        onClick={() => setEditRating(n)}
                        className={`cursor-pointer transition-all hover:scale-125 ${n <= editRating ? 'text-yellow-300' : 'text-gray-300'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full border-2 p-3 rounded-2xl shadow focus:ring-4 focus:ring-[#493D9E]/30 transition-all resize-none"
                  />

                  <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
                    <button
                      onClick={() => handleUpdate(c.id)}
                      className="bg-green-600 text-white px-5 py-2 rounded-2xl shadow hover:bg-green-700 transition-all active:scale-95"
                    >
                      Guardar
                    </button>

                    <button
                      onClick={() => setEditId(null)}
                      className="bg-gray-500 text-white px-5 py-2 rounded-2xl shadow hover:bg-gray-600 transition-all active:scale-95"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              )
            }

            // MODO NORMAL
            return (
              <div
                key={c.id}
                className="bg-white p-6 border-2 border-[#493D9E] rounded-2xl shadow-md space-y-3"
              >
                <div className="flex items-center gap-1 text-yellow-300 text-2xl">
                  {'★'.repeat(c.rating)}
                  <span className="text-gray-300">
                    {'★'.repeat(5 - c.rating)}
                  </span>
                </div>

                <p className="font-semibold text-[#493D9E] text-lg">
                  {c.userName}
                </p>
                <p className="text-gray-700">{c.texto}</p>

                <p className="text-xs text-gray-400">Publicado: {fecha}</p>

                {esPropietario && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      onClick={() => {
                        setEditId(c.id)
                        setEditText(c.texto)
                        setEditRating(c.rating)
                      }}
                      className="bg-purple-600 text-white px-5 py-2 rounded-2xl shadow hover:bg-purple-700 transition-all active:scale-95"
                    >
                      Editar
                    </button>

                    <button
                      onClick={() => handleDelete(c.id)}
                      className="bg-red-600 text-white px-5 py-2 rounded-2xl shadow hover:bg-red-700 transition-all active:scale-95"
                    >
                      Eliminar
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
      <div>
        <CommentForm />
        <CommentList />
      </div>
    </div>
  )
}
