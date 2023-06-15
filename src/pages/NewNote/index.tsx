import { Link } from "react-router-dom"
import { Button, FAIcon, Header } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { NewNote as NewNoteType } from "../../App"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export type NewNoteProps = {
  currentData?: NewNoteType
}

export const NewNote = () => {
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
      <NoteForm />
    </div>
  )
}
