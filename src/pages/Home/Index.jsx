import { Link } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Equipo from './components/MiniTeam/MiniTeam'
import CardSec from './components/SectionCard'

export default function Inicio() {
  return (
    <div className="bg-[#B2A5FF] text-gray-800 rounded-3xl flex flex-col">
      {/* ================= BIENVENIDA ================= */}
      <section
        className="
          relative
          w-full
          px-6 sm:px-10 lg:px-24
          py-16 sm:py-20 lg:py-24
          bg-linear-to-br from-[#B2A5FF] to-gray-50
          overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Texto */}
          <div className="max-w-xl text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-[Merienda] font-bold text-[#281e76] leading-tight">
              ¡Bienvenid@s a{' '}
              <span className="text-white drop-shadow-md">
                Digital Dreamers
              </span>
              !
            </h1>

            <p className="text-[#493D9E] text-lg sm:text-xl lg:text-2xl font-semibold">
              Damos vida a ideas digitales con creatividad, propósito y
              tecnología. Aquí los sueños se convierten en código ✨
            </p>

            <Link
              to="/contacto"
              className="mt-10 
              px-6 py-3 rounded-xl font-semibold
              hover:scale-105 hover:shadow-lg
              inline-block bg-[#281e76] text-white text-lg
              shadow-md transition-all duration-300 
              hover:bg-[#cb60f1]"
            >
              Contáctanos
            </Link>
          </div>

          {/* Imagen */}
          <img
            src={`${import.meta.env.BASE_URL}images/img1-index.png`}
            alt="Chicas programadoras"
            className="
              w-full
              max-w-md lg:max-w-xl
              rounded-3xl
              transition-transform
              hover:-translate-y-2
            "
          />
        </div>
      </section>

      {/* ================= BENTO ================= */}
      <section
        className="
        relative  
        w-full
        px-6 sm:px-10 lg:px-24
        py-16 sm:py-20 lg:py-24
        bg-linear-to-b from-[#ffee98] to-gray-50"
      >
        <div
          className="
          grid grid-cols-1
          md:grid-cols-2 lg:grid-cols-3
          gap-8 max-w-7xl
          mx-auto place-items-center"
        >
          {/* MISIÓN */}
          <CardSec
            title="Nuestra misión"
            description="Nuestra misión es transformar ideas en soluciones digitales funcionales y creativas. Unimos programación, desarrollo web, diseño gráfico y marketing digital para ayudar a emprendedores, marcas y estudiantes a crecer, comunicar y destacar en el mundo digital con calidad y compromiso. 🚀💻"
            className="h-[380px] w-full max-w-md"
          />

          {/* IMAGEN */}
          <CardSec
            image={`${import.meta.env.BASE_URL}images/imgobj.png`}
            description="Impulsamos soluciones digitales creativas"
            className="h-[380px] w-full max-w-md"
          />

          {/* VISIÓN */}
          <CardSec
            title="Nuestra visión"
            description="Aspiramos a ser un equipo creativo y tecnológico referente, reconocido por crear experiencias digitales innovadoras que integren estética 🎨, funcionalidad ⚙️ y estrategia 📊. Buscamos inspirar, educar y generar impacto positivo a través de proyectos que dejan huella."
            className="h-[380px] w-full max-w-md"
          />
        </div>
      </section>

      {/* ================= EQUIPO ================= */}
      <section
        className="
          relative
          w-full
          px-6 sm:px-10 lg:px-24
          py-16 sm:py-20 lg:py-24
          bg-gray-50
        "
      >
        <div className="flex flex-col items-center gap-10">
          <Equipo />

          <h2 className="text-3xl sm:text-4xl text-[#281e76] font-[Concert_One] text-center">
            Conoce más sobre...
          </h2>

          <Link
            to="/nosotras"
            className="mt-10 
            px-6 py-3 rounded-xl font-semibold
            hover:scale-105 hover:shadow-lg
            inline-block bg-[#281e76] text-white text-lg
            shadow-md transition-all duration-300 
            hover:bg-[#cb60f1]"
          >
            Nosotras
          </Link>
        </div>
      </section>

      {/* ================= PORTAFOLIO ================= */}
      <section
        className="
          relative
          w-full
          px-6 sm:px-10 lg:px-24
          py-16 sm:py-20 lg:py-24
          bg-linear-to-b from-gray-50 to-[#B2A5FF]
        "
      >
        <Portfolio />
      </section>
    </div>
  )
}
