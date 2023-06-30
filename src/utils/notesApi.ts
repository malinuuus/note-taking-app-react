import { Note } from '../App'
import { testTags } from '../testNotes'

type DateApi = {
  date: string
  timezone_type: number
  timezon: string
}

type NoteApi = {
  id: number
  title: string
  content: string
  updatedAt: DateApi
  createdAt: DateApi
  tagId: number
}

type FakerApi = {
  data: NoteApi[]
}

const get = async (url: string): Promise<FakerApi> => {
  const response = await fetch(url)
  return response.json()
}

export const getNotes = async (count: number) => {
  const apiUrl = `https://fakerapi.it/api/v1/custom?_quantity=${count}&id=counter&title=word&content=text&updatedAt=dateTime&createdAt=dateTime&tagId=counter`
  const { data } = await get(apiUrl)

  const newNotes: Note[] = data
    .map((note) => ({
      ...note,
      id: note.id.toString(),
      tags: testTags.filter((tag) => tag.id === note.tagId.toString()),
      createdAt: new Date(note.createdAt.date.slice(0, -7).replace(/-/g, '/')),
      updatedAt: new Date(note.updatedAt.date.slice(0, -7).replace(/-/g, '/'))
    }))
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())

  return newNotes
}