import { useState } from 'react'

export default function CalculatorPP() {
  // Preguntas y opciones
  const preguntas = [
    {
      texto: '1. ¿Qué actividad disfrutas más?',
      opciones: [
        { texto: 'Resolver problemas matemáticos', perfil: 'Analítico' },
        {
          texto: 'Diseñar ilustraciones o crear contenido',
          perfil: 'Creativo',
        },
        { texto: 'Liderar equipos y tomar decisiones', perfil: 'Líder' },
        { texto: 'Apoyar a otros y trabajar en equipo', perfil: 'Colaborador' },
      ],
    },
    {
      texto: '2. ¿Cómo prefieres trabajar?',
      opciones: [
        { texto: 'De manera estructurada y planificada', perfil: 'Analítico' },
        { texto: 'Con libertad e innovación', perfil: 'Creativo' },
        { texto: 'Organizando y dirigiendo', perfil: 'Líder' },
        { texto: 'Acompañando a mis compañeros', perfil: 'Colaborador' },
      ],
    },
    {
      texto: '3. ¿Qué valoras más en un proyecto?',
      opciones: [
        { texto: 'Precisión y resultados medibles', perfil: 'Analítico' },
        { texto: 'Originalidad e impacto visual', perfil: 'Creativo' },
        { texto: 'Logro de objetivos y metas claras', perfil: 'Líder' },
        { texto: 'La unión del grupo y el apoyo mutuo', perfil: 'Colaborador' },
      ],
    },
    {
      texto: '4. ¿Qué te motiva más al trabajar?',
      opciones: [
        { texto: 'Lograr resultados exactos', perfil: 'Analítico' },
        { texto: 'Expresar mis ideas y creatividad', perfil: 'Creativo' },
        { texto: 'Conseguir metas y retos importantes', perfil: 'Líder' },
        { texto: 'El compañerismo y el buen ambiente', perfil: 'Colaborador' },
      ],
    },
    {
      texto: '5. Si tienes un problema, ¿cómo lo enfrentas?',
      opciones: [
        {
          texto: 'Analizando datos y buscando soluciones lógicas',
          perfil: 'Analítico',
        },
        { texto: 'Probando ideas nuevas y diferentes', perfil: 'Creativo' },
        { texto: 'Motivando a otros para resolverlo juntos', perfil: 'Líder' },
        {
          texto: 'Consultando y ayudándome con mis compañeros',
          perfil: 'Colaborador',
        },
      ],
    },
    {
      texto: '6. ¿Qué tipo de tareas prefieres?',
      opciones: [
        {
          texto: 'Calcular, investigar y organizar información',
          perfil: 'Analítico',
        },
        { texto: 'Diseñar, inventar o escribir', perfil: 'Creativo' },
        { texto: 'Coordinar proyectos o dar instrucciones', perfil: 'Líder' },
        { texto: 'Apoyar en lo que el grupo necesite', perfil: 'Colaborador' },
      ],
    },
    {
      texto: '7. ¿Qué tipo de reconocimiento disfrutas más?',
      opciones: [
        { texto: 'Que valoren mi precisión y dedicación', perfil: 'Analítico' },
        {
          texto: 'Que aprecien mi creatividad e innovación',
          perfil: 'Creativo',
        },
        { texto: 'Que reconozcan mi capacidad de liderazgo', perfil: 'Líder' },
        {
          texto: 'Que agradezcan mi apoyo y colaboración',
          perfil: 'Colaborador',
        },
      ],
    },
    {
      texto: '8. ¿En qué ambiente te sientes más cómodo?',
      opciones: [
        {
          texto: 'En un entorno estructurado y con reglas claras',
          perfil: 'Analítico',
        },
        {
          texto: 'En un espacio flexible y con libertad creativa',
          perfil: 'Creativo',
        },
        {
          texto: 'En dinámicas de equipo donde pueda liderar',
          perfil: 'Líder',
        },
        {
          texto: 'En grupos colaborativos y de apoyo mutuo',
          perfil: 'Colaborador',
        },
      ],
    },
    {
      texto: '9. ¿Qué habilidad te gustaría desarrollar más?',
      opciones: [
        { texto: 'Análisis y pensamiento crítico', perfil: 'Analítico' },
        { texto: 'Imaginación y originalidad', perfil: 'Creativo' },
        { texto: 'Comunicación y liderazgo', perfil: 'Líder' },
        { texto: 'Empatía y cooperación', perfil: 'Colaborador' },
      ],
    },
    {
      texto: '10. ¿Cómo manejas la presión?',
      opciones: [
        { texto: 'Concentrándome en los detalles', perfil: 'Analítico' },
        { texto: 'Buscando soluciones creativas', perfil: 'Creativo' },
        { texto: 'Asumiendo la responsabilidad y guiando', perfil: 'Líder' },
        {
          texto: 'Apoyándome en el grupo y apoyando a otros',
          perfil: 'Colaborador',
        },
      ],
    },
  ]

  // Estados
  const [indice, setIndice] = useState(0)
  const [respuestas, setRespuestas] = useState([])
  const [resultado, setResultado] = useState('')
  const [descripcion, setDescripcion] = useState('')

  // Cargar siguiente pregunta
  const seleccionarRespuesta = (indiceOpcion) => {
    const perfil = preguntas[indice].opciones[indiceOpcion].perfil
    const nuevasRespuestas = [...respuestas, perfil]

    if (indice + 1 < preguntas.length) {
      setIndice(indice + 1)
      setRespuestas(nuevasRespuestas)
    } else {
      mostrarResultado(nuevasRespuestas)
    }
  }

  // Calcular resultado
  const mostrarResultado = (respuestasFinales) => {
    const conteo = {}
    respuestasFinales.forEach((p) => {
      conteo[p] = (conteo[p] || 0) + 1
    })

    const perfilGanador = Object.keys(conteo).reduce((a, b) =>
      conteo[a] > conteo[b] ? a : b,
    )

    let descripcionPerfil = ''
    switch (perfilGanador) {
      case 'Analítico':
        descripcionPerfil =
          'El perfil analítico se refleja porque la persona demuestra facilidad para observar, comparar y evaluar información, identifica patrones, organiza ideas con claridad y toma decisiones basadas en el razonamiento lógico y los datos.'
        break
      case 'Creativo':
        descripcionPerfil =
          'El perfil creativo se refleja porque la persona genera ideas originales, propone soluciones innovadoras, se adapta con facilidad a los cambios y utiliza la imaginación para abordar los retos de manera diferente y efectiva.'
        break
      case 'Líder':
        descripcionPerfil =
          'El perfil de líder se refleja porque la persona demuestra capacidad para organizar, motivar y guiar a los demás, toma decisiones con seguridad, se comunica de manera efectiva y genera confianza para alcanzar metas en equipo.'
        break
      case 'Colaborador':
        descripcionPerfil =
          'El perfil colaborador se refleja porque la persona trabaja en equipo con disposición, escucha y respeta las ideas de los demás, aporta apoyo cuando es necesario y busca alcanzar los objetivos comunes mediante la cooperación.'
        break
      default:
        descripcionPerfil = ''
    }

    setResultado(`Tu perfil profesional predominante es: ${perfilGanador}`)
    setDescripcion(descripcionPerfil)
  }

  // Reiniciar formulario
  const resetear = () => {
    setIndice(0)
    setRespuestas([])
    setResultado('')
    setDescripcion('')
  }

  const preguntaActual = preguntas[indice]

  return (
    <div>
      {/* Contenido principal */}
      <div className="contenedor shadow">
        <div className="titulo">
          <h1>Calculadora de Perfil Profesional</h1>
        </div>

        {!resultado ? (
          <form onReset={resetear}>
            <div>
              <p id="pregunta">{preguntaActual.texto}</p>
              <div>
                {preguntaActual.opciones.map((op, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => seleccionarRespuesta(i)}
                    className="shadow"
                  >
                    {op.texto}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <button type="reset" id="btnBorrar">
                Borrar respuesta
              </button>
            </div>
          </form>
        ) : (
          <>
            <h2>{resultado}</h2>
            <p>{descripcion}</p>
            <button type="button" onClick={resetear}>
              Volver a empezar
            </button>
          </>
        )}
      </div>
    </div>
  )
}
