import React, { useEffect } from 'react'
import ContactForm from '../Contact/components/ContactForm.jsx'

export default function Contacto() {
  useEffect(() => {
    console.log('Contacto.jsx montado')
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 🌟 Sección Servicios */}
      <section className="w-full bg-[#CAB8FF] py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3C2A91] mb-10">
          ¿EN QUÉ PODEMOS AYUDARTE?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: '🎨',
              title: 'Diseño UX/UI',
              text: 'Diseñamos experiencias digitales atractivas, intuitivas y centradas en el usuario.',
              bg: 'bg-[#FFF2AF]',
            },
            {
              icon: '💻',
              title: 'Desarrollo Web',
              text: 'Desde páginas informativas hasta plataformas dinámicas, creamos soluciones a medida.',
              bg: 'bg-[#FFF2AF]',
            },
            {
              icon: '🚀',
              title: 'Estrategia Digital',
              text: 'Te guiamos en marketing, redes sociales y posicionamiento online.',
              bg: 'bg-[#FFF2AF]',
            },
            {
              icon: '🤖',
              title: 'Integración con IA',
              text: 'Implementamos herramientas de inteligencia artificial para potenciar tu negocio.',
              bg: 'bg-[#FFF2AF]',
            },
            {
              icon: '🌍',
              title: 'Consultoría en Diversidad Tech',
              text: 'Fomentamos equipos inclusivos y entornos tecnológicos más diversos.',
              bg: 'bg-[#FFF2AF]',
            },
            {
              icon: '📚',
              title: 'Formación y Workshops',
              text: 'Capacitaciones prácticas en programación, diseño y herramientas digitales.',
              bg: 'bg-[#FFF2AF]',
            },
          ].map((servicio, index) => (
            <div
              key={index}
              className={`${servicio.bg} rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-lg font-semibold text-[#3C2A91] mb-2">
                {servicio.icon} {servicio.title}
              </h3>
              <p className="text-gray-700 text-sm">{servicio.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💜 Por qué elegirnos */}
      <section className="w-full bg-white py-16 px-6 text-center">
        <h2 className="text-2xl italic text-gray-800 mb-10">
          ¿Por qué elegirnos?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: '💜',
              title: 'PERSPECTIVA ÚNICA',
              text: 'Como equipo 100% femenino, aportamos una visión fresca y diversa que transforma cada proyecto en algo auténtico.',
            },
            {
              icon: '⚡',
              title: 'AGILIDAD Y FLEXIBILIDAD',
              text: 'Nos adaptamos rápidamente a los cambios con metodologías ágiles, entregando resultados óptimos sin perder calidad.',
            },
            {
              icon: '🔍',
              title: 'ATENCIÓN AL DETALLE',
              text: 'Cuidamos cada píxel, línea de código y palabra para que tu producto no solo funcione, sino que brille.',
            },
            {
              icon: '🌱',
              title: 'IMPACTO SOSTENIBLE',
              text: 'No construimos solo proyectos, sino soluciones que evolucionan contigo y generan impacto positivo a largo plazo.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#CAB8FF]/70 rounded-xl shadow-md p-6 hover:bg-[#bfa9ff] transition-colors duration-300"
            >
              <h3 className="text-[#3C2A91] font-semibold mb-2">
                {item.icon} {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📩 Formulario de contacto */}
      <section className="w-full bg-[#3C2A91] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-[Merienda] mb-4">¡Conectemos!</h2>
        <p className="text-sm mb-10">
          Completa el formulario para que podamos conocerte mejor y responderte
          lo antes posible.
        </p>

        <div className="max-w-lg mx-auto bg-white rounded-xl p-8 shadow-lg text-gray-800">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
