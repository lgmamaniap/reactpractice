
const Formulario = ({addNote}) => {
  const handleChange = (e) => {
    console.log(e.target.value)
    addNote(e.target.value)
  }
  return (
    <div className="formulario">
      <input type={'text'} onChange={handleChange}/>
      <button>Crear nota</button>
    </div>
  )
}

export default Formulario