import { Link, useNavigate, useParams } from "react-router-dom"
import { Note as NoteType } from "../../App";
import { ElementsGroup, Date, DeleteButton } from "./styles";
import { Button, Header } from "../../styles";

type NoteProps = {
  notes: NoteType[]
  onDelete: (noteId: string) => void
}

export const Note = ({ notes, onDelete }: NoteProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note: NoteType | undefined = notes.find(noteElem => noteElem.id == id);

  const handleDelete = () => {
    onDelete(note!.id);
    navigate('/');
  }

  return note ? (
    <div>
      <Header>
        <h1>{note.title}</h1>
        <ElementsGroup>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
          <Link to='..'>
            <Button>{'<'}</Button>
          </Link>
        </ElementsGroup>
      </Header>
      <Date>Last updated on {note.updatedAt.toDateString()} at {note.updatedAt.getHours()}:{note.updatedAt.getMinutes()}</Date>
      {note.content.split('\n').map(paragraph => (
        <p style={{minHeight: '1em'}}>{paragraph}</p>
      ))}
    </div>
  ) : (
    <>
      <p>This note doesn't exist</p>
      <Link to='/'>Go back to the home page</Link>
    </>
  )
}