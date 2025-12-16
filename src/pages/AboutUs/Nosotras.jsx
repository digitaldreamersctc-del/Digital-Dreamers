import teamData from '../../components/data/teamData.json' // Importamos el JSON con los datos
import TeamCard from './components/TeamCard' // Importamos el componente de la Card
import valuesData from '../../components/data/valuesData.json';
import ValueCard from './components/ValueCard'

export default function Nosotras() {
  const { intro, pilares, contextos } = valuesData

  return (
    <div className="bg-[#DAD2FF] text-gray-800 rounded-3xl">
      {/* Hero */}
      <section className="text-center py-20 bg-white shadow-md mt-10 mb-20 px-6">
        <h1 className="text-6xl font-bold text-[#281e76] mb-6 font-[Merienda]">
          Conócenos
        </h1>
        <p className="max-w-3xl mx-auto text-xl font-medium text-[#493D9E]">
          Un equipo creativo que transforma ideas en experiencias digitales.
        </p>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 mb-28 ">
        <h2 className="text-5xl text-center mb-14 font-[Concert_One] text-[#281e76]">
          Nuestro Equipo
          <span className="block w-16 h-1 bg-linear-to-r from-[#e5afec] to-[#cb60f1] mx-auto mt-3 rounded"></span>
        </h2>

        <div className="flex justify-center">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamData.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section
        className="
          relative
          w-full
          px-6 sm:px-10 lg:px-24
          py-16 sm:py-20 lg:py-24
          bg-linear-to-b from-[#ffee98] to-gray-50
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            max-w-7xl
            mx-auto
            place-items-center
          "
        >
          <CardSec
            title="Nuestra historia"
            description="Somos tres chicas apasionadas por la tecnología y la creatividad..."
            className="h-[380px] w-full max-w-md"
          />

          <CardSec
            image={`${import.meta.env.BASE_URL}images/imgobj.png`}
            description="Impulsamos soluciones digitales creativas"
            className="h-[380px] w-full max-w-md"
          />

          <CardSec
            title="Programar con propósito"
            description="Es crear soluciones web innovadoras que mezclen estética 🎨..."
            className="h-[380px] w-full max-w-md"
          />
        </div>
      </section>

      {/* Intro a valores*/}
      <section className="bg-white text-center py-16 shadow-sm">
        <h1 className="text-6xl font-bold text-[#281e76] mb-6 font-[Merienda]">
          {intro.title}
        </h1>
        <p className="max-w-3xl mx-auto text-xl font-medium text-[#493D9E]">
          {intro.subtitle}
        </p>
      </section>


      {/* Pilares */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-14 font-[Concert_One] text-[#281e76]">
          Nuestros Pilares
          <span className="block w-16 h-1 bg-linear-to-r from-[#e5afec] to-[#cb60f1] mx-auto mt-3 rounded"></span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pilares.map((item) => (
            <ValueCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Contextos */}
      <section className="py-10 px-6 max-w-7xl mx-auto ">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {contextos.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md text-center
              hover:-translate-y-2 transition-all duration-300
              flex flex-col justify-between"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-[Concert_One] text-2xl mb-2 text-[#493D9E]">
                {c.title}
              </h3>
              <p className="text-me text-gray-700">{c.text}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}
