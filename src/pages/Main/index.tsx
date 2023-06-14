import { useMemo, useState } from 'react'
import { Link } from "react-router-dom"
import { Note } from "../../App"
import { Note as NoteElement } from '../../components/Note'
import { Input, InputGroup, NotesContainer } from "./style"
import { Header, Button, FAIcon } from "../../styles"
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
 
type MainPageProps = {
  notes: Note[]
}

const animationDelayFactor = .2;

export const MainPage = ({ notes }: MainPageProps) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredNotes = useMemo(() => {
    return notes.filter(({ title, content }) => {
      const lowerVal = searchValue.toLowerCase();
      return title.toLowerCase().includes(lowerVal) || content.toLowerCase().includes(lowerVal);
    });
  }, [searchValue, notes])

  return (
    <div>
      <Header>
        <h1>My notes</h1>
        <Link to='/new'>
          <Button>
            <FAIcon icon={faPlus} />
          </Button>
        </Link>
      </Header>
      <InputGroup>
        <FAIcon icon={faMagnifyingGlass} />
        <Input
          type="text"
          placeholder="search notes..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </InputGroup>
      <NotesContainer>
      {filteredNotes.length > 0 ? (
        <>
          {filteredNotes.map((note, i) => (
            <NoteElement
              key={note.id}
              note={note}
              animationDelay={i * animationDelayFactor}
            />
          ))}
        </>
      ) : (
        <p>Nothing found</p>
      )}
      </NotesContainer>
    </div>
  )
}