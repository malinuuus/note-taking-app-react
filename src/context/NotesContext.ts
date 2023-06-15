import { createContext } from "react";
import { NewNote, Note, Tag } from "../App";

export type NotesContextType = {
  notes: Note[]
  tags: Tag[]
  handleNewNote: (newNote: NewNote) => void
  handleTagCreate: (newTag: Tag) => void
  handleNoteEdit: (id: string, newData: NewNote) => void
}

export const NotesContext = createContext<NotesContextType | null>(null);