import { Link, useParams } from "react-router-dom"
import { Note } from "../../App"
import { Button, Header } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { NotFound } from "../NotFound"

type EditNoteProps = {
  notes: Note[]
}

export const EditNote = ({ notes }: EditNoteProps) => {
  const { id } = useParams();
  const note: Note | undefined = notes.find(noteElem => noteElem.id == id);

  return note ? (
    <div>
      <Header>
        <h1>Edit note</h1>
        <Link to='..'>
          <Button>{'<'}</Button>
        </Link>
      </Header>
      <NoteForm currentData={note} />
    </div>
  ) : (
    <NotFound title={'This note doesn\'t exist'} />
  )
}
