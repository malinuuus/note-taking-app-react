import { Link } from "react-router-dom"

type PaginationNumberProps = {
  currentPage: number
  pageNumber: number
}

export const PaginationNumber = ({ currentPage, pageNumber }: PaginationNumberProps) => {
  return (
    <li className={currentPage === pageNumber ? 'active' : ''}>
      <Link to={`?page=${pageNumber}`} className='page-select'>
        {pageNumber}
      </Link>
    </li>
  )
}
