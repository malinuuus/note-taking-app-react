import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/Main';
import { NewNote } from './pages/NewNote';
import { Note as NotePage } from './pages/Note';
import { EditNote } from './pages/EditNote';
import { NotFound } from './pages/NotFound';
import { testNotes } from './testNotes';

type Tag = {
  id: string
  label: string
}

export type Note = {
  id: string
  title: string
  content: string
  tags: Tag[]
  createdAt: Date
  updatedAt: Date
}

function App() {
  const [notes, setNotes] = useState<Note[]>(testNotes);

  const handleNewNote = (newNote: Note) => {
    setNotes([...notes, newNote]);
  }

  const handleNoteDelete = (noteId: string) => {
    const newNotes = notes.filter(note => note.id !== noteId);
    setNotes(newNotes);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage notes={notes} />} />
        <Route path='/new' element={<NewNote onSubmit={handleNewNote} />} />
        <Route path='/:id'>
          <Route index element={<NotePage notes={notes} onDelete={handleNoteDelete} />} />
          <Route path='edit' element={<EditNote />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
