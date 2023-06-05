import { Note } from "../../App"
import { Note as NoteElement } from '../../components/Note'
import { Input, InputGroup, NotesContainer } from "./style"

type MainPageProps = {
  notes: Note[]
}

export const MainPage = ({ notes }: MainPageProps) => {
  return (
    <div>
      <h1>My notes</h1>
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