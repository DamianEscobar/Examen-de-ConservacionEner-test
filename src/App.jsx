import { useState } from 'react'
import Examenes from './Examenes'

export default function App() {
  const [nombre, setNombre] = useState('')
  const [empezar, setEmpezar] = useState(false)

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

  return <Examenes />
}
