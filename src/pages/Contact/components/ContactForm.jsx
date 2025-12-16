import { useState } from 'react'
import { db } from '../../../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    edad: '',
    grado: '',
    ciudad: '',
    telefono: '',
    correo: '',
    mensaje: '',
  })

  const [estado, setEstado] = useState({ mensaje: '', color: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const mostrarError = (msg) => {
    setEstado({ mensaje: msg, color: 'red' })
    setTimeout(() => setEstado({ mensaje: '', color: '' }), 6000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const {
      nombres,
      apellidos,
      edad,
      grado,
      ciudad,
      telefono,
      correo,
      mensaje,
    } = formData

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/
    const telRegistro = /^[0-9]{7,15}$/
    const correoRegistro = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const validaciones = [
      {
        cond:
          !nombres ||
          !apellidos ||
          !edad ||
          isNaN(parseInt(edad)) ||
          edad < 15 ||
          edad > 45 ||
          !grado ||
          !ciudad ||
          !telefono ||
          !correo ||
          !mensaje,
        msg: '❌ Por favor, completa todos los campos correctamente.',
      },
      {
        cond: !soloLetras.test(nombres) || !soloLetras.test(apellidos),
        msg: '❌ Nombres y apellidos solo deben contener letras.',
      },
      {
        cond: !telRegistro.test(telefono.replace(/\s+/g, '')),
        msg: '❌ Ingresa un teléfono válido (solo números, 7 a 15 dígitos).',
      },
      {
        cond: !correoRegistro.test(correo),
        msg: '❌ Ingresa un correo electrónico válido.',
      },
      {
        cond: mensaje.length < 10,
        msg: '❌ El mensaje debe tener al menos 10 caracteres.',
      },
    ]

    for (let val of validaciones) {
      if (val.cond) return mostrarError(val.msg)
    }

    try {
      // 🔥 Guarda los datos en Firestore
      await addDoc(collection(db, 'contactos'), {
        ...formData,
        fecha: serverTimestamp(),
      })

      setEstado({
        mensaje:
          '✅ ¡Gracias por contactarnos! Tus datos fueron enviados con éxito.',
        color: '#988ee2ff',
      })

      // Limpia el formulario
      setFormData({
        nombres: '',
        apellidos: '',
        edad: '',
        grado: '',
        ciudad: '',
        telefono: '',
        correo: '',
        mensaje: '',
      })

      setTimeout(() => setEstado({ mensaje: '', color: '' }), 8000)
    } catch (error) {
      console.error('Error al guardar:', error)
      mostrarError(
        '❌ Ocurrió un error al enviar tus datos. Intenta nuevamente.',
      )
    }
  }

  return (
    <section
      id="contacto"
      className=" flex flex-col items-center"
    >

      <form
        onSubmit={handleSubmit}
        className="text-[#2E1E5B] rounded-2xl p-8 w-full  space-y-5"
      >
        {/* Nombres */}
        <div>
          <label className="font-semibold">Nombres:</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            placeholder="Ejemplo: Sandra"
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          />
        </div>

        {/* Apellidos */}
        <div>
          <label className="font-semibold">Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            placeholder="Ejemplo: Charri Macassi"
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          />
        </div>

        {/* Edad */}
        <div>
          <label className="font-semibold">Edad:</label>
          <input
            type="number"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            min="15"
            max="45"
            placeholder="Entre 15 y 45 años. Ej: 18 años"
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          />
        </div>

        {/* Grado */}
        <div>
          <label className="font-semibold">Grado de estudios:</label>
          <select
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          >
            <option value="">Selecciona una opción</option>
            <option value="secundaria">Secundaria en curso / completa</option>
            <option value="tecnico">Técnico / Instituto</option>
            <option value="universitario">Universitario en curso</option>
            <option value="profesional">Universitario completo</option>
            <option value="postgrado">Postgrado / Maestría</option>
          </select>
        </div>

        {/* Ciudad */}
        <div>
          <label className="font-semibold">Ciudad / País:</label>
          <input
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            placeholder="Ejemplo: Lima, Perú"
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="font-semibold">Número de teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+51 999 999 999"
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          />
        </div>

        {/* Correo */}
        <div>
          <label className="font-semibold">Correo electrónico:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="nombre@gmail.com"
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          />
        </div>

        {/* Interés */}
        <div>
          <label className="font-semibold">Servicio de interés:</label>
          <select
            name="grado"
            value={formData.grado}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          >
            <option value="">Selecciona una opción</option>
            {/* Educación */}
            <option value="ux-educativo">Pack UX Educativo</option>
            <option value="mentoria">Mentoría Creativa / Digital</option>
            {/* Marca */}
            <option value="branding">Branding e Identidad Visual</option>
            <option value="marca-full">Marca Colectiva Full</option>
            {/* Web */}
            <option value="ecommerce-basico">E-commerce Básico</option>
            <option value="ecommerce-pro">E-commerce Profesional</option>
            <option value="blog-personal">Blog Personal</option>
            <option value="blog-pro">Blog Profesional</option>
            <option value="portfolio">Portafolio Profesional</option>
            <option value="portfolio-premium">Portafolio Premium</option>
            {/* Otros */}
            <option value="otro">Otro / Aún no estoy segura(o)</option>
          </select>
        </div>

        {/* Mensaje */}
        <div>
          <label className="font-semibold">Mensaje:</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Cuéntanos, ¿en qué podemos ayudarte?..."
            rows="5"
            required
            className="w-full mt-1 p-2 rounded-lg border border-gray-300 hover:border-[#cb60f1] shadow-sm hover:shadow-[#cb60f1] focus:outline-none focus:ring-2 focus:ring-[#493D9E]"
          ></textarea>
        </div>

        {/* Estado */}
        <p
          style={{ color: estado.color }}
          className="font-semibold text-center text-lg mt-2"
        >
          {estado.mensaje}
        </p>

        {/* Botón */}
        <button
          type="submit"
          className="mt-10 
            px-6 py-3 rounded-xl font-semibold
           hover:shadow-lg
            inline-block bg-[#281e76] text-white text-lg
            shadow-md hover:bg-[#cb60f1]"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  )
}
