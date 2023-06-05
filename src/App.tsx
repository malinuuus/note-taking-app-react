import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { MainPage } from './pages/Main';
import { NewNote } from './pages/NewNote';
import { Note } from './pages/Note';
import { EditNote } from './pages/EditNote';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/new' element={<NewNote />} />
        <Route path='/:id'>
          <Route index element={<Note />} />
          <Route path='edit' element={<EditNote />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
