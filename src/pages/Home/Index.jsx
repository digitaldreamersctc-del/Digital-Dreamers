import { Link } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Equipo from './components/MiniTeam'
import CardSec from '../../components/ui/SectionCard'

export default function Inicio() {
  return (
    <div className="bg-[#DAD2FF] text-gray-800 rounded-3xl flex flex-col">
      {/* Bienvenida */}
      <section className="relative flex flex-col lg:flex-row items-center justify-between bg-linear-to-tr from-[#B2A5FF] to-gray-50 px-10 lg:px-20 py-24 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute bottom-0 left-0 w-full h-[150px]"></div>

        {/* Texto principal */}
        <div className="relative z-10 max-w-xl text-center lg:text-left space-y-5">
          <h1 className="text-6xl tracking-wide font-[Merienda] font-bold text-[#281e76] leading-tight">
            ¡Bienvenid@s a{' '}
            <span className="text-white drop-shadow-md">Digital Dreamers</span>!
          </h1>

          <p className="text-[#493D9E] text-2xl  font-semibold">
            Damos vida a ideas digitales con creatividad, propósito y
            tecnología. Aquí los sueños se convierten en código ✨
          </p>

          <div className="pt-4">
            <Link
              to="/contacto"
              className="inline-block bg-[#281e76] text-white font-semibold px-6 py-3 rounded-2xl text-lg shadow-md transition-all duration-300 hover:bg-[#ffee98] hover:text-[#281e76] hover:shadow-md"
            >
              Contáctanos
            </Link>
          </div>
        </div>

        {/* Imagen decorativa */}
        <div className="relative z-10 mt-10 lg:mt-0">
          <img
            src={`${import.meta.env.BASE_URL}images/img1-index.png`}
            alt="Chicas programadoras"
            className="w-full max-w-[500px] rounded-3xl hover:-translate-y-2 transition-transform duration-300"
          />
        </div>
      </section>

      {/* SECCIONES en Bento grids */}
      <div className="relative  bg-linear-to-b from-white to-[#ffee98] flex flex-col lg:flex-row lg:justify-between items-center justify-center bg-gray-50 lg:px-24 lg:py-24 overflow-hidden p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10 max-w-7xl w-full">
          {/* SECCIÓN 1 - NUESTRA HISTORIA */}
          <CardSec
            title="Nuestra historia"
            description="Somos tres chicas apasionadas por la tecnología y la creatividad. Todo empezó cuando descubrimos que, uniendo nuestras habilidades en programación, desarrollo web, diseño gráfico y marketing digital, podíamos crear algo más grande que proyectos individuales. Así nació nuestro proyecto: un espacio donde transformamos ideas en soluciones digitales reales. ❤️👩‍💻"
            className="col-span-1 p-4 border-3 border-[#cb60f1] rounded-2xl hover:border-[#281e76] transition-transform"
          />
          <CardSec
            className="col-span-1 rounded-2xl hover:border-[#281e76] transition-transform"
            image={`${import.meta.env.BASE_URL}images/imgobj.png`}
          />
          {/* SECCIÓN 2 - Propósito */}
          <CardSec
            title="Programar con propósito"
            description="Es crear soluciones web innovadoras que mezclen estética 🎨, funcionalidad ⚙️ y organización 📋. Lo hacemos con un espíritu de colaboración donde nuestras ideas (¡y las tuyas!) cobran vida en forma de experiencias digitales que inspiran, comunican y dejan huella."
            className="col-span-1 p-4 border-3 border-[#cb60f1] rounded-2xl hover:border-[#281e76] transition-transform"
          />
        </div>
      </div>

      {/* SECCIÓN - Equipo */}
      <section className="relative bg-linear-to-b from-[#ffee98] to-gray-50 p-15 overflow-hidden">
        <Equipo />
        {/* Atajo a "Nosotras" */}
        <div className="text-4xl text-center text-[#281e76] font-[Concert_One]">
          <h2>Conoce más sobre...</h2>
        </div>
        <div className="flex justify-center m-4">
          <Link
            to="/nosotras"
            className="inline-block bg-[#281e76] text-white font-semibold px-6 py-3 rounded-2xl text-lg shadow-md transition-all duration-300 hover:bg-[#B2A5FF] hover:text-[#281e76] hover:shadow-md"
          >
            Nosotras
          </Link>
        </div>
      </section>

      {/* SECCIÓN - Portafolio*/}
      <section className="flex flex-col justify-center items-center bg-gray-50 p-15 overflow-hidden">
        <Portfolio />
      </section>
    </div>
  )
}
