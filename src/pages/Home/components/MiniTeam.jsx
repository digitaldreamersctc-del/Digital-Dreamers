import CardT from '../../../components/ui/MiniTeamCard'

export default function Equipo() {
  return (
    <div className="flex flex-col justify-center gap-5">
      <div>
        <div className="text-5xl text-center text-[#281e76] font-[Concert_One]">
          <h2> Tres mentes, un mismo código 💻</h2>
        </div>
        <div className="text-center text-[#493D9E]  font-[Merienda] font-semibold text-3xl">
          <h2> ¡Formamos un equipo sin igual!</h2>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center gap-6 md:gap-8 px-4 md:px-24 my-12">
        <CardT
          name="Marcell 🌸"
          description="Especialista en diseño UI/UX, amante del detalle y la belleza en cada proyecto."
          image={`${import.meta.env.BASE_URL}images/img2.png`}
          title="Foto de Marcell"
        />
        <CardT
          name="Yamileth 💻"
          description="Front-end developer apasionada por un código limpio, funcional y elegante."
          image={`${import.meta.env.BASE_URL}images/img2.png`}
          title="Foto de Yamileth"
        />
        <CardT
          name="Sandra 🚀"
          description="Creativa en maquetación web, transforma ideas en interfaces que conectan."
          image={`${import.meta.env.BASE_URL}images/img2.png`}
          title="Foto de Sandra"
        />
      </div>
    </div>
  )
}
