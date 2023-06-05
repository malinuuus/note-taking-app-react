import { Link } from "react-router-dom"
import { Note } from "../../App"
import { Note as NoteElement } from '../../components/Note'
import { Input, InputGroup, NotesContainer } from "./style"
import { Header, Button } from "../../styles"

type MainPageProps = {
  notes: Note[]
}

export const MainPage = ({ notes }: MainPageProps) => {
  return (
    <div>
      <Header>
        <h1>My notes</h1>
        <Link to='/new'>
          <Button>Add</Button>
        </Link>
      </Header>
      <InputGroup>
        <span>🔍</span>
        <Input type="text" placeholder="search notes..." />
      </InputGroup>
      <NotesContainer>
        {notes.map(note => <NoteElement key={note.id} note={note} />)}
      </NotesContainer>
    </div>
  )
}