import { Link, useParams } from "react-router-dom"
import { NewNote, Note, Tag } from "../../App"
import { Button, Header } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { NoteNotFound } from "../../components/NoteNotFound"

type EditNoteProps = {
  onSubmit: (id: string, newData: NewNote) => void
  notes: Note[]
  availableTags: Tag[]
  onTagCreate: (newTag: Tag) => void
}

export const EditNote = ({ onSubmit, notes, availableTags, onTagCreate }: EditNoteProps) => {
  const { id } = useParams();
  const note: Note | undefined = notes.find(noteElem => noteElem.id == id);

  return note ?(
    <div>
      <Header>
        <h1>Edit note</h1>
        <Link to='..'>
          <Button>{'<'}</Button>
        </Link>
      </Header>
      <NoteForm
        onSubmit={newNote => onSubmit(id!, newNote)}
        availableTags={availableTags}
        currentData={note}
        onTagCreate={onTagCreate}
      />
    </div>
  ) : (
    <NoteNotFound />
  )
}
