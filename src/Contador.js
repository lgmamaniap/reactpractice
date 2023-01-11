import { useState } from "react"
import Clicks from "./Clicks"

const INITIAL_COUNTER_STATE = {
  left: 0,
  rigth: 0,
  mensaje: 'Mensaje del estado',
}

const Contador = () => {
  const [valor, setValor] = useState(0)

  // Forma indicada de utilizar estados, 
  // no es recomendable utilizarlos como en el segundo ejemplo...
  // const [left, setLeft] = useState(0)
  // const [rigth, setRigth] = useState(0)

  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE)

  const [clicks, setClicks] = useState([])

  const handleCount = (operacion) => {
    if (operacion === 'suma') setValor(valor + 1)
    if (operacion === 'resta') setValor(valor - 1)
  }

  const handleReset = () => {
    setValor(0)
  }

  const handleConterLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1
    })
    // herramienta para detener la ejecucion del codigo en este punto
    // debugger
    setClicks([...clicks, 'L'])
  }

  const handleConterRight = () => {
    setCounters({
      ...counters,
      rigth: counters.rigth + 1,
    })
    setClicks([...clicks, 'R'])
  }

  const handleResetCounter = () => {
    setCounters(INITIAL_COUNTER_STATE)
    setClicks([])
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
      <h3>Nuevo contador</h3>
      <div>
        {counters.left}
        <button onClick={handleConterLeft}>left</button>
        <button onClick={handleConterRight}>rigth</button>
        {counters.rigth}
        <br />
        <button onClick={handleResetCounter}>Reset</button>
        <h5>Cantidad de clicks: {clicks.length}</h5>
        <Clicks clicks={clicks}/>
      </div>
    </>
  )
}

export default Contador