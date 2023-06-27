import { Link, useNavigate, useParams } from "react-router-dom"
import { Note as NoteType } from "../../App";
import { ElementsGroup, Date, DeleteButton, Tag, TagsWrapper } from "./styles";
import { Button, FAIcon, Header, Wrapper } from "../../styles";
import { dateFormat, timeFormat } from "../../utils/dateFormat";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { NotFound } from "../NotFound";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
    <Wrapper>
      <Header>
        <h1>{note.title}</h1>
        <ElementsGroup>
          <DeleteButton onClick={handleDelete}>
            <FAIcon icon={faTrashCan} />
            <span>Delete</span>
          </DeleteButton>
          <Link to='./edit'>
            <Button>
              <FAIcon icon={faPenToSquare} />
              <span>Edit</span>
            </Button>
          </Link>
          <Link to='..' aria-label='go back'>
            <Button aria-label='go back'>
              <FAIcon icon={faArrowLeft} />
            </Button>
          </Link>
        </ElementsGroup>
      </Header>
      <TagsWrapper>
        {note.tags.map(({id, label}) => (
          <Tag key={id}>{label}</Tag>
        ))}
      </TagsWrapper>
      <Date>Last updated on {dateFormat(note.updatedAt)} at {timeFormat(note.updatedAt)}</Date>
      {note.content.split('\n').map((paragraph, i) => (
        <p key={i} style={{minHeight: '1em'}}>{paragraph}</p>
      ))}
    </Wrapper>
  ) : (
    <NotFound title={'This note doesn\'t exist'} />
  )
}