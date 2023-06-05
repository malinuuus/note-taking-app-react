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

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage notes={notes} />} />
        <Route path='/new' element={<NewNote />} />
        <Route path='/:id'>
          <Route index element={<NotePage />} />
          <Route path='edit' element={<EditNote />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
