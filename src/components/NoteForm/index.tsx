import { Button } from "../../styles"
import { InputGroup } from "./styles"

export const NoteForm = () => {
  return (
    <form>
      <InputGroup>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" />
      </InputGroup>
      <InputGroup>
        <label htmlFor="content">Content</label>
        <textarea id="content"></textarea>
      </InputGroup>
      <Button type="submit">Add</Button>
    </form>
  )
}
