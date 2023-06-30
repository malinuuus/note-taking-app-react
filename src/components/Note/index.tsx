import { Note as NoteType } from "../../App"
import { dateFormat, timeFormat } from "../../utils/dateFormat";
import { Date as DateElement, NoteElement } from "./styles";

type NoteProps = {
  note: NoteType
  animationDelay: number
}

export const Note = ({ note: { id, title, updatedAt }, animationDelay }: NoteProps) => {
  return (
    <NoteElement to={`/${id}`} $delay={animationDelay}>
      <p>{title}</p>
      <DateElement>
        {updatedAt.toDateString() === new Date().toDateString()
          ? timeFormat(updatedAt)
          : dateFormat(updatedAt)}
      </DateElement>
    </NoteElement>
  )
}
