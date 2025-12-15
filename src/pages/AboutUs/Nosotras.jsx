import teamData from '../../components/data/teamData.json' // Importamos el JSON con los datos
import TeamCard from './components/TeamCard' // Importamos el componente de la Card
import Valores from './components/Valores'

export default function Nosotras() {
  return (
    <div className="bg-[#DAD2FF] text-gray-800">
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

      {/* valores */}
      <section className="max-w-7xl mx-auto px-6 mb-28">
        <Valores />
      </section>
    </div>
  )
}
