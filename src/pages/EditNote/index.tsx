import { useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import { Note } from "../../App"
import { Button, FAIcon, Header, Wrapper } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { NotFound } from "../NotFound"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

type EditNoteProps = {
  notes: Note[]
}

export const EditNote = ({ notes }: EditNoteProps) => {
  const { id } = useParams();
  const note: Note | undefined = notes.find(noteElem => noteElem.id == id);

  useEffect(() => {
    if (note) {
      document.title = note.title
    }

    return () => {
      document.title = 'Note taking app'
    }
  }, [])

  return note ? (
    <Wrapper>
      <Header>
        <h1>Edit note</h1>
        <Link to='..' aria-label='go back'>
          <Button aria-label='go back'>
            <FAIcon icon={faArrowLeft} />
          </Button>
        </Link>
      </Header>
      <NoteForm currentData={note} />
    </Wrapper>
  ) : (
    <NotFound title={'This note doesn\'t exist'} />
  )
}
