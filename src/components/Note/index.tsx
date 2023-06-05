import { Note as NoteType } from "../../App"
import { Date, NoteElement } from "./styles";

type NoteProps = {
  note: NoteType
}

export const Note = ({ note }: NoteProps) => {
  const date = `${note.createdAt.toLocaleDateString('en-GB')} ${note.createdAt.getHours()}:${note.createdAt.getMinutes()}`;

  return (
    <NoteElement to={`/${note.id}`}>
      <p>{note.title}</p>
      <Date>{date}</Date>
    </NoteElement>
  )
}
