import React from 'react'

export default function Nosotras() {
  return (
    <div className="bg-[#DAD2FF] text-gray-800">
      {/* Sección Hero */}
      <section className="text-center py-20 bg-white shadow-md mt-10 mb-16 px-4">
        <h1 className="text-5xl font-bold text-[#493D9E] mb-6 font-[Concert_One]">
          CONOCE MÁS SOBRE NOSOTRAS
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 font-[Macondo]">
          Cuatro mentes creativas unidas por la pasión por la tecnología y el
          deseo de crear un impacto positivo en el mundo digital.
        </p>
      </section>

      {/* Nuestras Historias */}
      <section className="max-w-6xl mx-auto px-6 mb-24 text-center">
        <h2 className="text-4xl mb-12 text-gray-900 font-[Merienda] relative inline-block">
          Nuestras Historias
          <span className="block w-16 h-1 bg-linear-to-r from-[#e5afec] to-[#cb60f1] mx-auto mt-3 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sandra */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#c56ce6] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-[Concert_One] mb-2">
              Sandra E. Charri Macassi (Sam)
            </h3>
            <p className="text-sm text-[#c778e6] font-semibold uppercase mb-4">
              Diseñadora de UX/UI y programadora de Front-end
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Mi historia con la programación empieza con la pasión por el
              diseño gráfico. Luego de llevar cursos técnicos sobre el tema,
              descubrí Adobe Dreamweaver y Fireworks. Más tarde, participé en el
              programa educativo “Protagonistas del futuro” de Chicas en
              Tecnologías (2024), donde aprendí UX/UI con Figma, App Inventor y
              marketing. En 2025 obtuve la beca +ChicasTec, consolidando mis
              conocimientos y habilidades como programadora y diseñadora.
            </p>
          </div>

          {/* Yamileth */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#c56ce6] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-[Concert_One] mb-2">
              Yamileth Quispe Espinoza
            </h3>
            <p className="text-sm text-[#c778e6] font-semibold uppercase mb-4">
              Programadora en formación
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Comencé mi camino en la programación gracias a la beca +ChicasTec,
              que me abrió las puertas hacia el fascinante mundo de la
              tecnología. Aprendí que programar no solo es escribir código, sino
              imaginar soluciones y crear herramientas que transforman vidas.
              Cada reto me ayudó a fortalecer mi pensamiento lógico, mi
              creatividad y mi pasión por aprender constantemente.
            </p>
          </div>

          {/* María Belén */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#c56ce6] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-[Concert_One] mb-2">María Belén</h3>
            <p className="text-sm text-[#c778e6] font-semibold uppercase mb-4">
              Desarrolladora web en formación
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Descubrí la programación gracias a la beca +ChicasTec, y desde
              entonces me apasiona crear páginas y proyectos que combinen
              creatividad con tecnología. Cada proyecto es una oportunidad para
              aprender y explorar nuevas formas de expresar mis ideas.
            </p>
          </div>

          {/* Marcell */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#c56ce6] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-[Concert_One] mb-2">Marcell Gamboa</h3>
            <p className="text-sm text-[#c778e6] font-semibold uppercase mb-4">
              Desarrolladora web en formación
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Me estoy iniciando en el mundo de la programación y el diseño web.
              Comencé con el programa +ChicasTec (2025), donde aprendí diseño
              UX/UI con Figma y programación básica. Estoy emocionada por todo
              lo que estoy descubriendo y aprendiendo día a día.
            </p>
          </div>
        </div>
      </section>

      {/* Datos Curiosos */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center pb-20">
        <h2 className="text-4xl mb-12 text-gray-900 font-[Merienda] relative inline-block">
          Datos Curiosos
          <span className="block w-16 h-1 bg-linear-to-r from-[#e5afec] to-[#cb60f1] mx-auto mt-3 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sandra */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#c56ce6] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-[Concert_One] mb-2">
              Sandra E. Charri Macassi
            </h3>
            <h4 className="text-lg text-[#948bd6] font-semibold mb-2">
              Herramientas favoritas:
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Figma, Miro, Canva, Illustrator, Dreamweaver, VS Code y GitHub.
            </p>
            <div className="bg-[#C5BDF7] rounded-lg p-4 text-[#352C7A] font-semibold">
              Superpoder: Pensar en lo que el usuario necesita y dejar una marca
              personal en cada trabajo colaborativo.
            </div>
          </div>

          {/* Yamileth */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#c56ce6] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-[Concert_One] mb-2">
              Yamileth Quispe Espinoza
            </h3>
            <h4 className="text-lg text-[#948bd6] font-semibold mb-2">
              Herramientas favoritas:
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Visual Studio Code, Bootstrap, CSS y HTML.
            </p>
            <div className="bg-[#C5BDF7] rounded-lg p-4 text-[#352C7A] font-semibold">
              Superpoder: Aprendo rápido, innovo y doy a cada proyecto un toque
              único.
            </div>
          </div>

          {/* María Belén */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#c56ce6] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-[Concert_One] mb-2">María Belén</h3>
            <h4 className="text-lg text-[#948bd6] font-semibold mb-2">
              Herramientas favoritas:
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Visual Studio Code, HTML, CSS y la técnica de “aprender haciendo”.
            </p>
            <div className="bg-[#C5BDF7] rounded-lg p-4 text-[#352C7A] font-semibold">
              Superpoder: Transformar ideas simples en proyectos funcionales y
              organizados.
            </div>
          </div>

          {/* Marcell */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#c56ce6] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-[Concert_One] mb-2">Marcell Gamboa</h3>
            <h4 className="text-lg text-[#948bd6] font-semibold mb-2">
              Herramientas favoritas:
            </h4>
            <p className="text-sm text-gray-700 mb-3">
              Figma, Miro, Visual Studio Code y GitHub.
            </p>
            <div className="bg-[#C5BDF7] rounded-lg p-4 text-[#352C7A] font-semibold">
              Superpoder: Simplificar lo complejo y crear diseños fáciles de
              usar.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
