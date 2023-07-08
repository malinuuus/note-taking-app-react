import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FAIcon } from '../../styles'
import { PaginationWrapper } from './styles'
import { Link } from 'react-router-dom'

type PaginationProps = {
  pagesCount: number
  currentPage: number
}

export const Pagination = ({ pagesCount, currentPage }: PaginationProps) => {
  const prevArrowClass = currentPage === 1 ? 'disabled' : ''
  const nextArrowClass = currentPage === pagesCount ? 'disabled' : ''

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
        {[...Array(pagesCount).keys()]
          .map(num => num + 1)
          .map(num => (
            <li key={num} className={num === currentPage ? 'active' : ''}>
              <Link to={`?page=${num}`} className='page-select'>{num}</Link>
            </li>
          ))}
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
