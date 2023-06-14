import { Note as NoteType } from "../../App"
import { dateFormat, timeFormat } from "../../utils/dateFormat";
import { Date as DateElement, NoteElement } from "./styles";

type NoteProps = {
  note: NoteType
  animationDelay: number
}

export const Note = ({ note, animationDelay }: NoteProps) => {
  return (
    <NoteElement to={`/${note.id}`} $delay={animationDelay}>
      <p>{note.title}</p>
      {note.updatedAt.toDateString() === new Date().toDateString() ? (
        <DateElement>{timeFormat(note.updatedAt)}</DateElement>
      ) : (
        <DateElement>{dateFormat(note.updatedAt)}</DateElement>
      )}
    </NoteElement>
  )
}
