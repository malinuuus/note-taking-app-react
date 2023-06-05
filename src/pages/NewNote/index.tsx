import { Link } from "react-router-dom"
import { Button, Header } from "../../styles"
import { NoteForm } from "../../components/NoteForm"

export const NewNote = () => {
  return (
    <div>
      <Header>
        <h1>Create note</h1>
        <Link to='..'>
          <Button>{'<'}</Button>
        </Link>
      </Header>
      <NoteForm />
    </div>
  )
}
