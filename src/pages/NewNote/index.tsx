import { Link } from "react-router-dom"
import { Button, FAIcon, Header } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { NewNote as NewNoteType, Tag } from "../../App"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export type NewNoteProps = {
  onSubmit: (newNote: NewNoteType) => void
  availableTags: Tag[]
  onTagCreate: (newTag: Tag) => void
  currentData?: NewNoteType
}

export const NewNote = ({ onSubmit, availableTags, onTagCreate }: NewNoteProps) => {
  return (
    <div>
      <Header>
        <h1>Create note</h1>
        <Link to='..'>
          <Button>
            <FAIcon icon={faArrowLeft} />
          </Button>
        </Link>
      </Header>
      <NoteForm
        onSubmit={onSubmit}
        availableTags={availableTags}
        onTagCreate={onTagCreate}
      />
    </div>
  )
}
