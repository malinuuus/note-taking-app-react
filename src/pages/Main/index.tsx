import { useContext, useMemo, useState } from 'react'
import { Link } from "react-router-dom"
import { Note as NoteElement } from '../../components/Note'
import { Input, InputGroup, NotesContainer } from "./styles"
import { Header, Button, FAIcon } from "../../styles"
import { faMagnifyingGlass, faMoon, faPlus, faSun } from '@fortawesome/free-solid-svg-icons'
import { NotesContext, NotesContextType } from '../../context/NotesContext'
import { ElementsGroup } from '../Note/styles'
import { ThemeContext } from '../../context/ThemeContext'
import { Tag } from '../../App'
import { TagsSelect } from '../../components/TagsSelect'

const animationDelayFactor = .2;

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const { notes } = useContext(NotesContext) as NotesContextType;
  const { themeType, setTheme } = useContext(ThemeContext);

  const filteredNotes = useMemo(() => {
    let filteredNotes = notes.filter(({ title, content }) => {
        const lowerVal = searchValue.toLowerCase()
        return (title.toLowerCase().includes(lowerVal) || content.toLowerCase().includes(lowerVal))
    })
    
    if (selectedTags.length > 0) {
      filteredNotes = filteredNotes.filter(({ tags }) => {
        return tags.some(tag => selectedTags.some(selectedTag => selectedTag.id === tag.id))
      })
    }
    
    return filteredNotes
  }, [selectedTags, searchValue])

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
      <TagsSelect
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
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