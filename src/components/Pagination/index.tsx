import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FAIcon } from '../../styles'
import { PaginationWrapper } from './styles'
import { Link } from 'react-router-dom'
import { PaginationNumber } from './PaginationNumber'

type PaginationProps = {
  pagesCount: number
  currentPage: number
  siblingCount: number
}

export const Pagination = ({ pagesCount, currentPage, siblingCount = 1 }: PaginationProps) => {
  const prevArrowClass = currentPage === 1 ? 'disabled' : ''
  const nextArrowClass = currentPage === pagesCount ? 'disabled' : ''

  // array with numbers from 1 to pagesCount - 1
  const pageNumbers = [...Array(pagesCount).keys()]
    .map((num) => num + 1)
    .slice(1, pagesCount - 1)

  return (
    <PaginationWrapper>
      <ul>
        <li className='arrow'>
          <Link
            to={`?page=${currentPage - 1}`}
            aria-label='previous page'
            className={prevArrowClass}
          >
            <FAIcon icon={faArrowLeft} className='fa-icon' />
          </Link>
        </li>
        <PaginationNumber currentPage={currentPage} pageNumber={1} />
        {currentPage > siblingCount + 2 && (
          <li className='disabled'>
            <a href='#'>...</a>
          </li>
        )}
        {pageNumbers
          .filter(
            (num) =>
              (num >= currentPage - siblingCount || num === pagesCount - siblingCount - 1) &&
              (num <= currentPage + siblingCount || num === siblingCount + 2)
          )
          .map((num) => (
            <PaginationNumber currentPage={currentPage} pageNumber={num} />
          ))}
        {currentPage + siblingCount + 1 < pagesCount && (
          <li className='disabled'>
            <a href='#'>...</a>
          </li>
        )}
        <PaginationNumber currentPage={currentPage} pageNumber={pagesCount} />
        <li className='arrow'>
          <Link
            to={`?page=${currentPage + 1}`}
            aria-label='next page'
            className={nextArrowClass}
          >
            <FAIcon icon={faArrowRight} className='fa-icon' />
          </Link>
        </li>
      </ul>
    </PaginationWrapper>
  )
}
