import { useState } from "react"

const Contador = () => {
  const [valor, setValor] = useState(0)

  const handleCount = (operacion) => {
    if (operacion === 'suma') setValor(valor + 1)
    if (operacion === 'resta') setValor(valor - 1)
  }

  const handleReset = () => {
    setValor(0)
  }
  
   return (
    <>
      <h2>{valor}</h2>
      <div>
        <button onClick={() => handleCount('suma')}>Sumar</button>
        <button onClick={() => handleCount('resta')}>Restar</button>
        <br />
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default Contador