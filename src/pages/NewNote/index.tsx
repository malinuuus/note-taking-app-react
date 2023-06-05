import { Link } from "react-router-dom"
import { Button, Header } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { Note } from "../../App"

export type NewNoteProps = {
  onSubmit: (newNote: Note) => void
}

export const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <div>
      <Header>
        <h1>Create note</h1>
        <Link to='..'>
          <Button>{'<'}</Button>
        </Link>
      </Header>
      <NoteForm onSubmit={onSubmit} />
    </div>
  )
}
