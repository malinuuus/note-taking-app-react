import { Link } from "react-router-dom"

export const NoteNotFound = () => {
  return (
    <>
      <p>This note doesn't exist</p>
      <Link to='/'>Go back to the home page</Link>
    </>
  )
}