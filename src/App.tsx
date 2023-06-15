import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { NewNote } from './pages/NewNote';
import { Note as NotePage } from './pages/Note';
import { EditNote } from './pages/EditNote';
import { NotFound } from './pages/NotFound';
import { testNotes, testTags } from './testNotes';
import { NotesContext } from './context/NotesContext';

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
  const [notes, setNotes] = useState<Note[]>(testNotes);
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
    <NotesContext.Provider value={{ notes, tags, handleNewNote, handleTagCreate }}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/new' element={<NewNote />} />
          <Route path='/:id'>
            <Route index element={<NotePage notes={notes} onDelete={handleNoteDelete} />} />
            <Route path='edit' element={<EditNote onSubmit={handleNoteEdit} notes={notes} availableTags={tags} onTagCreate={handleTagCreate} />} />
          </Route>
          <Route path='*' element={<NotFound title='Page not found' />} />
        </Routes>
      </Router>
    </NotesContext.Provider>
  )
}

export default App
