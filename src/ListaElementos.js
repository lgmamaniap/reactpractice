import Formulario from "./Formulario"
import Note from "./Note"

const notes = [
  {
    id: 1,
    content: 'html is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T17:30:31.098Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of http',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 4,
    content: 'html is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
]

const ListaElementos = () => {
  const addNote = () => {
    console.log('adding Note')
  }
  return (
    <>
      <Formulario addNote={addNote}/>
      { notes ?
        <ul>
          {
            notes.map((note) => {
              return <Note key={note.id} content={note.content} date={note.date} />
            })
          }
        </ul>
        : <div>No hay contenido</div>
      }
    </>
  )
}

export default ListaElementos