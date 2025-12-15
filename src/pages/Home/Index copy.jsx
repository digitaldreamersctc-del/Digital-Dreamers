import { Link } from 'react-router-dom'
import TestimonialSection from './components/TestimonialSection'
import Portafolio from './components/Portafolio'
import CardS from './components/CardSection'

export default function Inicio() {
  return (
    <div className="flex flex-col">
      <section className="relative flex flex-col lg:flex-row items-center justify-between bg-linear-to-br from-[#B2A5FF] to-white px-10 lg:px-20 py-24 overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute bottom-0 left-0 w-full h-[150px]"></div>

        {/* Texto principal */}
        <div className="relative z-10 max-w-xl text-center lg:text-left space-y-5">
          <h1 className="text-6xl tracking-wide font-[Merienda] font-bold text-[#493D9E] leading-tight">
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
              className="inline-block bg-[#493D9E] text-[#FFF2AF] font-semibold px-6 py-3 rounded-2xl text-lg shadow-md transition-all duration-300 hover:bg-[#FFF2AF] hover:text-[#493D9E] hover:shadow-md"
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

      {/* SECCiONES en Bento grids */}
      <div>
        {/* SECCIÓN 1 - 💬 NUESTRA HISTORIA */}

        <section className="flex flex-col lg:flex-row justify-center items-center gap-10 bg-white px-10 lg:px-24 py-24 ">
          <div className="max-w-3xl text-[#493D9E] text-center text-lg font-medium leading-relaxed">
            <h2 className="text-4xl font-[Merienda] font-bold text-center mb-8">
              Nuestra historia 🌸
            </h2>
            <p>
              Somos cuatro programadoras apasionadas por el diseño web, la
              estética y el trabajo colaborativo. Cada proyecto es un universo
              donde la organización se encuentra con la imaginación, y donde los
              sueños se vuelven código que inspira, conecta y comunica. ❤️👩‍💻.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 - Propósito */}
        <section className="flex flex-col justify-center gap-5 bg-[#FFF2AF]">
          <div className="text-center text-[#493D9E]  text-2xl font-medium pt-8">
            <h2
              className="text-4xl font-bold font-[Merienda] text-center mb-10"
              style={{ color: '#493D9E' }}
            >
              🎯 Porque programar con propósito...
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 border-b-10 border-b-gradient-to-r from-[#B2A5FF] to-[#FFF2AF] border-[#B2A5FF] rounded-2xl bg-white px-10 md:px-24 my-12 p-4 overflow-hidden">
            <div className="flex justify-center items-center">
              <img
                src={`${import.meta.env.BASE_URL}images/imgobj.png`}
                alt="nuestros objetivos"
                className="w-full max-w-[500px] rounded-2xl object-cover transition-transform duration-300 hover:-translate-y-2"
              />
            </div>
            <div className="flex justify-center text-justify p-12 text-[22px] font-medium text-[#493D9E]">
              <p>
                Es crear soluciones web innovadoras que mezclen estética 🎨,
                funcionalidad ⚙️ y organización 📋. Lo hacemos con un espíritu
                de colaboración donde nuestras ideas (¡y las tuyas!) cobran vida
                en forma de experiencias digitales que inspiran, comunican y
                dejan huella.
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* SECCIÓN 3 - Equipo */}
      <section className="flex flex-col justify-center gap-8 bg-white">
        <div className="text-center text-[#493D9E] font-[Merienda] text-2xl font-medium pt-8">
          <h2
            className="text-4xl font-bold text-center mb-10"
            style={{ color: '#493D9E' }}
          >
            Cuatro mentes, un mismo código 💻
          </h2>
        </div>

        <div className="flex justify-center text-[#493D9E] font-[Macondo] text-lg font-semibold">
          <h3
            className="text-4xl font-bold text-center mb-10"
            style={{ color: '#493D9E' }}
          >
            ¡Formamos un equipo sin igual!
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-10 md:px-24 my-12 p-4">
          {[
            {
              nombre: 'Marcell 🌸',
              texto:
                'Especialista en diseño UI/UX, amante del detalle y la belleza en cada proyecto.',
            },
            {
              nombre: 'Yamileth 💻',
              texto:
                'Front-end developer apasionada por un código limpio, funcional y elegante.',
            },
            {
              nombre: 'María 💡',
              texto:
                'Creativa en maquetación web, transforma ideas en interfaces que conectan.',
            },
            {
              nombre: 'Sandra 🚀',
              texto:
                'Desarrolladora full stack con visión estratégica y amor por la innovación.',
            },
          ].map((persona, index) => (
            <div
              key={index}
              className="bg-[#FFF2AF] max-w-[280px] rounded-3xl overflow-hidden shadow-md border-t-10 border-[#B2A5FF] transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer hover:rotate-1"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/img2.png`}
                alt={`Foto de ${persona.nombre}`}
                className="w-full max-w-[500px] h-[200px] object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-[#493D9E] font-[Concert_One] text-xl">
                  {persona.nombre}
                </h3>
                <p className="text-[#493D9E] text-base mt-2">{persona.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 4 - Calculadora de perfil profesional*/}

      {/* SECCIÓN 5 - Atajo a "Nosotras" */}
      <section className="flex flex-col justify-center gap-5 bg-[#DAD2FF] pb-24">
        <div className="text-center text-[#493D9E] font-[Merienda] text-2xl font-medium pt-8">
          <h2
            className="text-4xl font-bold text-center mb-10"
            style={{ color: '#493D9E' }}
          >
            🌱 Conoce más sobre...
          </h2>
        </div>

        <div className="flex justify-center">
          <Link
            to="/nosotras"
            className="rounded-2xl bg-[#B2A5FF] text-[#493D9E] text-lg font-bold no-underline px-6 py-3 transition-all duration-300 hover:bg-[#FFF2AF] hover:shadow-md hover:-translate-y-1 active:bg-[#493D9E] active:text-[#FFF2AF] hover:scale-105"
          >
            Nosotras
          </Link>
        </div>
      </section>

      <section>
        <Portafolio />
        <TestimonialSection />
      </section>
    </div>
  )
}
