export default function Valores() {
  return (
    <div className="bg-[#DAD2FF] text-gray-800">
      {/* Sección 1 */}
      <section className="bg-white text-center py-16">
        <h1 className="text-5xl font-bold text-[#493D9E] mb-4">
          LOS VALORES QUE NOS DEFINEN
        </h1>
        <p className="font-[Macondo] text-lg">
          Estos principios guían cada proyecto y cada decisión que tomamos como
          equipo.
        </p>
      </section>

      {/* Pilares Fundamentales */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-center text-4xl font-[Merienda] text-[#493D9E] border-b-4 border-[#896AFA] pb-6 mb-10">
          Nuestros Pilares Fundamentales
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titulo: '🤝 Colaboración',
              texto:
                'Unir talentos y conocimientos para alcanzar objetivos en equipo, apoyándose mutuamente. En un grupo de programadoras, la colaboración es trabajar como un solo motor: cada integrante aporta habilidades para que el proyecto avance. No se trata solo de dividir tareas, sino de compartir ideas, aprender unas de otras y mejorar juntas. También implica pedir ayuda, reconocer logros y apoyarse.',
              frase:
                '💻 "En programación, un buen equipo es como un código limpio: cada línea cuenta para que todo funcione."',
            },
            {
              titulo: '🎨 Creatividad',
              texto:
                'Buscar soluciones innovadoras y originales para resolver problemas. En programación, la creatividad es ver más allá de lo evidente. Es transformar un requerimiento en una solución funcional y atractiva. No se trata solo de hacerlo diferente, sino mejor y más eficiente. Una programadora creativa mezcla lógica y arte, generando experiencias digitales únicas y memorables para los usuarios.',
              frase:
                '💻 "Programar no es solo escribir código, es pintar ideas con líneas de lógica."',
            },
            {
              titulo: '💪 Perseverancia',
              texto:
                'Mantenerse firmes ante los retos y errores, aprendiendo de cada fallo. En el código, los errores son inevitables, pero la perseverancia convierte un bug en una lección. Es no rendirse aunque la solución parezca escondida y seguir intentando hasta lograrlo. Perseverar es aprender de cada fallo, mantener la motivación y tener paciencia hasta obtener el resultado esperado.',
              frase:
                '💻 "Un error en el código no es el final, es la pista que te acerca a la solución."',
            },
            {
              titulo: '📅 Responsabilidad',
              texto:
                'Cumplir compromisos y entregar trabajos de calidad en el tiempo acordado. En un equipo de programadoras, la responsabilidad es respetar plazos y calidad, asumiendo el rol con seriedad. Significa que nuestro aporte no afecte negativamente al proyecto. También implica comunicar problemas a tiempo para que el equipo pueda adaptarse, demostrando compromiso con el objetivo final.',
              frase:
                '💻 "En programación, cada línea de código es una promesa cumplida al proyecto."',
            },
            {
              titulo: '🔍 Curiosidad',
              texto:
                'Estar siempre dispuestas a aprender nuevas herramientas y lenguajes. La curiosidad impulsa a explorar y no conformarse con lo que ya se sabe. En programación, permite evolucionar, descubrir tecnologías y adaptarse a cambios. Las programadoras curiosas buscan optimizar, experimentar y aprender para innovar y resolver problemas con ideas creativas e inesperadas.',
              frase:
                '💻 "La mejor programadora no es la que lo sabe todo, sino la que siempre quiere aprender más."',
            },
            {
              titulo: '🤗 Respeto',
              texto:
                'Escuchar y valorar las ideas de todas, sin importar la experiencia. El respeto es la base de una buena comunicación. Significa aceptar distintas formas de resolver problemas y debatirlas sin descalificar. Un equipo con respeto crea confianza, permite expresar ideas y recibir críticas constructivas, resolviendo conflictos sin dañar relaciones.',
              frase:
                '💻 "En el código y en el equipo, cada aporte cuenta para que todo compile."',
            },
          ].map((valor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl border-t-4 border-[#B2A5FF] p-8 hover:-translate-y-3 hover:shadow-2xl transition-all"
            >
              <h3 className="font-[Concert_One] text-2xl mb-4">
                {valor.titulo}
              </h3>
              <p className="text-lg mb-4">{valor.texto}</p>
              <p className="bg-[#B2A5FF] text-[#352C7A] p-4 rounded-md text-center font-semibold">
                {valor.frase}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo vivimos estos valores */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-center text-4xl font-[Merienda] text-[#493D9E] border-b-4 border-[#896AFA] pb-6 mb-10">
          Cómo vivimos estos valores
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              titulo: '👨‍👩‍👦 En nuestra familia',
              texto:
                'Practicamos la colaboración y el respeto al apoyarnos en las tareas y escucharnos con atención. Con responsabilidad cumplimos nuestros deberes, y con perseverancia enfrentamos juntos las dificultades. La creatividad y la curiosidad nos ayudan a resolver problemas cotidianos y aprender como equipo.',
            },
            {
              titulo: '📚 En nuestro aprendizaje',
              texto:
                'Vivimos nuestros valores al estudiar con responsabilidad, compartir conocimientos y apoyarnos unas a otras con respeto y colaboración. La perseverancia nos mantiene firmes frente a lo difícil, mientras que la creatividad y la curiosidad nos impulsan a buscar nuevas formas de aprender y mejorar.',
            },
            {
              titulo: '🎯 En nuestros proyectos',
              texto:
                'Aplicamos todos los valores al trabajar en equipo: colaboramos, respetamos las ideas de cada integrante y asumimos con responsabilidad cada tarea. La perseverancia nos ayuda a superar errores, la creatividad nos permite innovar, y la curiosidad nos motiva a investigar nuevas herramientas.',
            },
            {
              titulo: '👥 En nuestra comunidad',
              texto:
                'Nuestros valores se reflejan en la forma de convivir: colaboramos para ayudar a los demás, respetamos la diversidad de opiniones y actuamos con responsabilidad en los compromisos sociales. Además, mantenemos la perseverancia en causas comunes y usamos creatividad y curiosidad para proponer mejoras que beneficien a todos.',
            },
          ].map((valor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl border-t-4 border-[#B2A5FF] p-8 hover:-translate-y-3 hover:shadow-2xl transition-all"
            >
              <h3 className="font-[Concert_One] text-2xl mb-4">
                {valor.titulo}
              </h3>
              <p className="text-lg">{valor.texto}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
