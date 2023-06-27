import { Link } from "react-router-dom"
import { Button, FAIcon, Header, Wrapper } from "../../styles"
import { NoteForm } from "../../components/NoteForm"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export const NewNote = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Create note</h1>
        <Link to='..' aria-label='go back'>
          <Button aria-label='go back'>
            <FAIcon icon={faArrowLeft} />
          </Button>
        </Link>
      </Header>
      <NoteForm />
    </Wrapper>
  )
}
