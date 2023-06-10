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

  const handleNewNote = (newNote: NewNote) => {
    setNotes([...notes, {
      ...newNote,
      id: new Date().valueOf().toString(),
      createdAt: new Date()
    }]);
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

    setNotes(newNotes);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage notes={notes} />} />
        <Route path='/new' element={<NewNote onSubmit={handleNewNote} />} />
        <Route path='/:id'>
          <Route index element={<NotePage notes={notes} onDelete={handleNoteDelete} />} />
          <Route path='edit' element={<EditNote onSubmit={handleNoteEdit} notes={notes} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
