import { useState } from "react"

const examenes = [
  {
    titulo: "Examen 1",
    preguntas: [
      {
        tipo: "opcion",
        enunciado: "1. ¿Cuál es la principal fuente de energía de Paraguay según su matriz energética?",
        opciones: ["Carbón", "Petróleo", "Hidroelectricidad", "Energía solar"],
        correcta: "Hidroelectricidad"
      },
      {
        tipo: "opcion",
        enunciado: "2. El diagnóstico energético permite principalmente:",
        opciones: ["Medir el nivel de contaminación ambiental", "Evaluar el confort de los usuarios", "Identificar áreas de mejora y ahorro", "Diseñar nuevos edificios energéticos"],
        correcta: "Identificar áreas de mejora y ahorro"
      },
      {
        tipo: "vf",
        enunciado: "3. Las energías renovables siempre se convierten directamente en energía final sin pérdidas.",
        correcta: false
      }
    ]
  },
  {
    titulo: "Examen 2",
    preguntas: [
      {
        tipo: "opcion",
        enunciado: "1. ¿Qué porcentaje de la oferta energética de Paraguay corresponde a hidroenergía según el balance 2012?",
        opciones: ["27%", "46%", "57%", "76%"],
        correcta: "57%"
      },
      {
        tipo: "opcion",
        enunciado: "2. ¿Qué energía tiene un uso mayoritario en el consumo final paraguayo?",
        opciones: ["Electricidad", "Hidrocarburos", "Biomasa", "Gas natural"],
        correcta: "Biomasa"
      },
      {
        tipo: "vf",
        enunciado: "3. En la mecánica relativista, masa y energía son equivalentes.",
        correcta: true
      }
    ]
  },
  {
    titulo: "Examen 3",
    preguntas: [
      {
        tipo: "opcion",
        enunciado: "1. ¿Cuál de estas leyes establece la producción y transporte independiente de energía en Paraguay?",
        opciones: ["Ley 6092/16", "Ley de Electricidad", "Ley 3009/06", "Ley de Energa Renovable"],
        correcta: "Ley 3009/06"
      },
      {
        tipo: "opcion",
        enunciado: "2. ¿Cuál es el objetivo principal de la cogeneración?",
        opciones: ["Almacenar energía eléctrica", "Generar energía nuclear", "Aprovechar el calor residual", "Crear energía solar"],
        correcta: "Aprovechar el calor residual"
      },
      {
        tipo: "vf",
        enunciado: "3. Los generadores trifásicos producen corrientes desfasadas a 120 grados entre bobinas.",
        correcta: true
      }
    ]
  }
]

export default function Examenes() {
  const [seleccionado, setSeleccionado] = useState(0)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const preguntas = examenes[seleccionado].preguntas

  const handleChange = (index, value) => {
    setRespuestas({ ...respuestas, [index]: value })
  }

  const calcularResultado = () => {
    let correctas = 0
    preguntas.forEach((p, i) => {
      const respuestaUsuario = respuestas[i]
      if (p.tipo === "opcion" && respuestaUsuario === p.correcta) correctas++
      if (p.tipo === "vf" && ((respuestaUsuario === "V" && p.correcta) || (respuestaUsuario === "F" && !p.correcta))) correctas++
    })
    return correctas
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Exámenes de Conservación de Energía</h1>

      <div className="mb-4 space-x-2">
        {examenes.map((examen, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSeleccionado(idx)
              setRespuestas({})
              setMostrarResultado(false)
            }}
            style={{ padding: "0.4rem 1rem", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px" }}
          >
            {examen.titulo}
          </button>
        ))}
      </div>

      {preguntas.map((p, i) => (
        <div key={i} style={{ marginBottom: "1.5rem", backgroundColor: "#fff", padding: "1rem", borderRadius: "10px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
          <p style={{ fontWeight: "bold" }}>{p.enunciado}</p>
          {p.tipo === "opcion" ? (
            p.opciones.map((op, idx) => (
              <div key={idx}>
                <label>
                  <input
                    type="radio"
                    name={`pregunta-${i}`}
                    value={op}
                    checked={respuestas[i] === op}
                    onChange={(e) => handleChange(i, e.target.value)}
                  />{" "}
                  {op}
                </label>
              </div>
            ))
          ) : (
            <div>
              <label>
                <input
                  type="radio"
                  name={`pregunta-${i}`}
                  value="V"
                  checked={respuestas[i] === "V"}
                  onChange={(e) => handleChange(i, e.target.value)}
                />{" "}
                Verdadero
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name={`pregunta-${i}`}
                  value="F"
                  checked={respuestas[i] === "F"}
                  onChange={(e) => handleChange(i, e.target.value)}
                />{" "}
                Falso
              </label>
            </div>
          )}
        </div>
      ))}

      <button onClick={() => setMostrarResultado(true)} style={{ padding: "0.5rem 1.5rem", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>
        Finalizar Examen
      </button>

      {mostrarResultado && (
        <div style={{ marginTop: "1rem", backgroundColor: "#e2fbe2", padding: "1rem", borderRadius: "10px" }}>
          <h2 className="text-xl font-bold">Resultado</h2>
          <p className="text-lg">Respuestas correctas: {calcularResultado()} de {preguntas.length}</p>
        </div>
      )}
    </div>
  )
}
