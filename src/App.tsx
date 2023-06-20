import { useContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { NewNote } from './pages/NewNote';
import { Note as NotePage } from './pages/Note';
import { EditNote } from './pages/EditNote';
import { NotFound } from './pages/NotFound';
import { testNotes, testTags } from './testNotes';
import { NotesContext } from './context/NotesContext';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/ThemeContext';

export type Tag = {
  id: string
  label: string
}

export type NewNote = {
  title: string
  content: string
  tags: Tag[]
  updatedAt: Date
}

export type Note = {
  id: string
  createdAt: Date
} & NewNote

function App() {
  const { theme } = useContext(ThemeContext);

  const [notes, setNotes] = useState<Note[]>(testNotes.map(note => {
    return {
      ...note,
      createdAt: new Date(note.createdAt),
      updatedAt: new Date(note.updatedAt)
    }
  }));
  const [tags, setTags] = useState<Tag[]>(testTags);

  const handleNewNote = (newNote: NewNote) => {
    setNotes([{
      ...newNote,
      id: new Date().valueOf().toString(),
      createdAt: new Date()
    }, ...notes]);
  }

  const handleNoteDelete = (noteId: string) => {
    const newNotes = notes.filter(note => note.id !== noteId);
    setNotes(newNotes);
  }

  const handleNoteEdit = (noteId: string, newData: NewNote) => {
    const newNotes = notes.map(note => {
      return note.id === noteId ? {
        ...newData,
        id: note.id,
        createdAt: note.createdAt
      } : note;
    })

    setNotes([...newNotes].sort((a, b) => {
      return b.updatedAt.getTime() - a.updatedAt.getTime();
    }));
  }

  const handleTagCreate = (newTag: Tag) => {
    setTags([...tags, newTag])
  }

  return (
    <ThemeProvider theme={theme}>
      <NotesContext.Provider value={{ notes, tags, handleNewNote, handleTagCreate, handleNoteEdit }}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/new' element={<NewNote />} />
            <Route path='/:id'>
              <Route index element={<NotePage notes={notes} onDelete={handleNoteDelete} />} />
              <Route path='edit' element={<EditNote notes={notes} />} />
            </Route>
            <Route path='*' element={<NotFound title='Page not found' />} />
          </Routes>
        </HashRouter>
      </NotesContext.Provider>
    </ThemeProvider>
  )
}

export default App
