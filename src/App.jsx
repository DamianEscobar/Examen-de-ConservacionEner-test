import { useState } from 'react'
import examenes from './Examenes'

export default function App() {
  const [nombre, setNombre] = useState('')
  const [empezar, setEmpezar] = useState(false)
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
      const r = respuestas[i]
      if (p.tipo === 'opcion' && r === p.correcta) correctas++
      if (p.tipo === 'vf' && ((r === 'V' && p.correcta) || (r === 'F' && !p.correcta))) correctas++
    })
    return correctas
  }

  if (!empezar) {
    return (
      <div
        style={{
          backgroundImage: 'url(/energia-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textShadow: '1px 1px 3px black'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Examen de Conservación de Energía</h1>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            border: 'none',
            fontSize: '1rem',
            marginBottom: '1rem'
          }}
        />
        <button
          onClick={() => setEmpezar(true)}
          style={{
            padding: '0.5rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#007BFF',
            color: 'white'
          }}
        >
          Comenzar
        </button>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">

      {/* Viñetas para cambiar entre exámenes */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {examenes.map((ex, i) => (
          <button
            key={i}
            onClick={() => {
              setSeleccionado(i)
              setRespuestas({})
              setMostrarResultado(false)
            }}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: i === seleccionado ? '#007BFF' : '#ddd',
              color: i === seleccionado ? 'white' : 'black',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            {ex.titulo}
          </button>
        ))}
      </div>


      <h1 className="text-2xl font-bold mb-4">Examen: {examenes[seleccionado].titulo}</h1>

      {preguntas.map((p, i) => (
        <div key={i} style={{ marginBottom: '1.5rem', backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
          <p style={{ fontWeight: 'bold' }}>{p.enunciado}</p>

          {p.tipo === 'opcion' ? (
            p.opciones.map((op, idx) => (
              <label key={idx} style={{ display: 'block', margin: '4px 0', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name={`pregunta-${i}`}
                  value={op}
                  checked={respuestas[i] === op}
                  onChange={(e) => handleChange(i, e.target.value)}
                  style={{ marginRight: '6px', cursor: 'pointer' }}
                />
                {op}
              </label>
            ))
          ) : (
            <>
              <label style={{ marginRight: '20px', cursor: 'pointer' }}>
                <input
                  type="radio"
                  name={`pregunta-${i}`}
                  value="V"
                  checked={respuestas[i] === "V"}
                  onChange={(e) => handleChange(i, e.target.value)}
                  style={{ marginRight: '6px', cursor: 'pointer' }}
                />
                Verdadero
              </label>
              <label style={{ cursor: 'pointer' }}>
                <input
                  type="radio"
                  name={`pregunta-${i}`}
                  value="F"
                  checked={respuestas[i] === "F"}
                  onChange={(e) => handleChange(i, e.target.value)}
                  style={{ marginRight: '6px', cursor: 'pointer' }}
                />
                Falso
              </label>
            </>
          )}

          {mostrarResultado && respuestas[i] && (
            <p style={{ marginTop: '8px', color: respuestas[i] === p.correcta || (p.tipo === 'vf' && ((respuestas[i] === 'V' && p.correcta) || (respuestas[i] === 'F' && !p.correcta))) ? 'green' : 'red' }}>
              {respuestas[i] === p.correcta || (p.tipo === 'vf' && ((respuestas[i] === 'V' && p.correcta) || (respuestas[i] === 'F' && !p.correcta)))
                ? '?? ¡Correcto!'
                : '? Incorrecto.'}
              <br />
              <span style={{ fontStyle: 'italic', color: '#333' }}>{p.explicacion}</span>
            </p>
          )}

          {mostrarResultado && (
            <button
              onClick={() => {
                setRespuestas({})
                setMostrarResultado(false)
              }}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1.5rem',
                backgroundColor: '#ffc107',
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Reiniciar este examen
            </button>
          )}

        </div>
      ))}

      <button
        onClick={() => setMostrarResultado(true)}
        style={{
          padding: '0.5rem 1.5rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
      >
        Finalizar Examen
      </button>

      {mostrarResultado && (
        <div style={{ marginTop: '1rem', backgroundColor: '#e2fbe2', padding: '1rem', borderRadius: '10px' }}>
          <h2 className="text-xl font-bold">Resultado</h2>
          <p className="text-lg">Respuestas correctas: {calcularResultado()} de {preguntas.length}</p>
        </div>
      )}
    </div>
  )
}
