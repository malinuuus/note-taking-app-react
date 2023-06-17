import { useContext, useMemo, useState } from 'react'
import { Link } from "react-router-dom"
import { Note as NoteElement } from '../../components/Note'
import { Input, InputGroup, NotesContainer } from "./style"
import { Header, Button, FAIcon } from "../../styles"
import { faMagnifyingGlass, faMoon, faPlus, faSun } from '@fortawesome/free-solid-svg-icons'
import { NotesContext, NotesContextType } from '../../context/NotesContext'
import { ElementsGroup } from '../Note/styles'
import { ThemeContext } from '../../context/ThemeContext'

const animationDelayFactor = .2;

export const MainPage = () => {
  const { notes } = useContext(NotesContext) as NotesContextType;
  const { themeType, setTheme } = useContext(ThemeContext);
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
        <ElementsGroup>
          <Button onClick={() => setTheme!(themeType === 'dark' ? 'light' : 'dark')}>
            {themeType === 'dark' ? <FAIcon icon={faSun} /> : <FAIcon icon={faMoon} />}
          </Button>
          <Link to='/new'>
            <Button>
              <FAIcon icon={faPlus} />
            </Button>
          </Link>
        </ElementsGroup>
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