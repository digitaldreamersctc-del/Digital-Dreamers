import { Link } from 'react-router-dom'
import SectionSplit from './SectionSplit.jsx'

export default function Lanzamiento() {
  return (
    <div className="bg-[#DAD2FF] text-gray-800 rounded-3xl flex flex-col">
      {/* ================= BANNER ================= */}
      <section className="relative w-full aspect-16/5">
        <img
          src={`${import.meta.env.BASE_URL}images/bannerLanzamiento.jpg`}
          alt="Lanzamiento Digital Dreamers"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-tl from-[#281e76] to-[#e5afec] flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center">
            Digital Dreamers está{' '}
            <span className="font-[Concert_One] text-[#e5afec] text-5xl sm:text-6xl lg:text-6xl">
              online
            </span>
          </h1>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section
        className="
          px-6 sm:px-10 lg:px-24
          py-20
          bg-linear-to-b from-[#DAD2FF] to-gray-50
          text-center
        "
      >
        <p className="max-w-3xl mx-auto text-[#493D9E] text-xl sm:text-2xl font-semibold">
          Presentamos oficialmente a <strong>Digital Dreamers</strong>, un
          equipo creativo que une diseño, tecnología y colaboración para crear
          soluciones digitales con identidad y propósito.
        </p>

        <Link
          to="/home"
          className="
            mt-12 inline-block
            bg-linear-to-br from-[#281e76] to-[#cb60f1] text-white
            px-10 py-4 rounded-2xl
            text-lg font-semibold
            shadow-md
            hover:bg-[#cb60f1]
            hover:scale-105
            transition-all
          "
        >
          Comencemos
        </Link>
      </section>

      {/* ===============================PUBLICACIÓN PARA REDES=============================== */}
      <section className="bg-gray-50 px-10 lg:px-24 py-24 text-center">
        <div
          className="bg-[#DAD2FF] rounded-3xl p-10 
                    max-w-4xl mx-auto text-lg font-medium
                    text-[#493D9E]
                    shadow-lg hover:shadow-2xl
                    transform transition-all duration-300
                    hover:-translate-y-3 hover:scale-[1.02] cursor-pointer"
        >
          <p>
            🚀 Hoy presentamos oficialmente a <strong>Digital Dreamers</strong>,
            un equipo creativo enfocado en el desarrollo de experiencias
            digitales modernas y funcionales 💻✨
            <br />
            <br />
            Trabajamos con pasión, organización y creatividad para transformar
            ideas en proyectos digitales con propósito.
          </p>
        </div>
      </section>

      {/* ================= SECCIONES ALTERNADAS ================= */}

      <section
        className="
    w-full
    bg-linear-to-t from-[#DAD2FF] to-gray-50
    px-4 sm:px-8 lg:px-24
    py-14 sm:py-18 lg:py-24
  "
      >
        <div className="flex flex-col gap-20">
          <SectionSplit
            title="En el trabajo..."
            description="Aplicamos metodologías ágiles, comunicación constante y procesos claros. Nos adaptamos a cada cliente y proyecto para lograr resultados funcionales, estéticos y alineados a tus objetivos."
            image={`${import.meta.env.BASE_URL}images/lanzamiento3.png`}
          />

          <SectionSplit
            title="Te ofrecemos"
            description="Diseño UX/UI, desarrollo web, estrategia digital, formación y consultoría tecnológica. Creamos soluciones que no solo se ven bien, sino que funcionan y evolucionan contigo."
            image={`${import.meta.env.BASE_URL}images/lanzamiento2.png`}
            reverse
          />

          <SectionSplit
            title="Elíjenos pues..."
            description="Trabajamos con una mirada humana, creativa y estratégica. Cada proyecto nace del diálogo, crece con organización y se construye con atención al detalle, buscando impacto real y sostenible."
            image={`${import.meta.env.BASE_URL}images/lanzamiento1.png`}
          />
        </div>
      </section>

      {/* 🌟 Sección Servicios */}
      <section className="w-full bg-linear-to-b from-[#DAD2FF] to-gray-50 py-18 px-6 text-center">
        <h2 className="text-4xl text-[#281e76] mb-10 font-[Concert_One]">
          ¡Te ayudamos! Conoce nuestros servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: '🎨',
              title: 'Diseño UX/UI',
              text: 'Diseñamos experiencias digitales atractivas, intuitivas y centradas en el usuario.',
              bg: 'bg-white',
            },
            {
              icon: '💻',
              title: 'Desarrollo Web',
              text: 'Desde páginas informativas hasta plataformas dinámicas, creamos soluciones a medida.',
              bg: 'bg-white',
            },
            {
              icon: '🚀',
              title: 'Estrategia Digital',
              text: 'Te guiamos en marketing, redes sociales y posicionamiento online.',
              bg: 'bg-white',
            },
            {
              icon: '🤖',
              title: 'Integración con IA',
              text: 'Implementamos herramientas de inteligencia artificial para potenciar tu negocio.',
              bg: 'bg-white',
            },
            {
              icon: '🌍',
              title: 'Consultoría en Diversidad Tech',
              text: 'Fomentamos equipos inclusivos y entornos tecnológicos más diversos.',
              bg: 'bg-white',
            },
            {
              icon: '📚',
              title: 'Formación y Workshops',
              text: 'Capacitaciones prácticas en programación, diseño y herramientas digitales.',
              bg: 'bg-white',
            },
          ].map((servicio, index) => (
            <div
              key={index}
              className={`${servicio.bg} rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-lg font-semibold text-[#281e76] mb-2">
                {servicio.icon} {servicio.title}
              </h3>
              <p className="text-gray-700 text-sm">{servicio.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section
        className="
          bg-linear-to-r from-[#281e76] to-[#493D9E]
          text-white
          py-24
          text-center
        "
      >
        <h2 className="text-4xl font-[Merienda] font-bold mb-6">
          ¿List@ para conocer al equipo?
        </h2>

        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Descubre quiénes somos y cómo convertimos ideas en experiencias
          digitales.
        </p>

        <Link
          to="/nosotras"
          className="
            mt-12 inline-block
            bg-linear-to-br from-white to-[#cb60f1] text-[#281e76]
            px-10 py-4 rounded-2xl
            text-lg font-semibold
            shadow-md
            hover:bg-[#cb60f1]
            hover:scale-105
            transition-all
          "
        >
          Conócenos
        </Link>
      </section>
    </div>
  )
}
