import { Link } from "react-router-dom"
import { FAIcon } from "../../styles"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { styled } from "styled-components"

const NotFoundWrapper = styled.div`
  text-align: center;
  margin-top: 10%;
`;

type NotFoundProps = {
  title: string
}

export const NotFound = ({ title }: NotFoundProps) => {
  return (
    <NotFoundWrapper>
      <FAIcon icon={faCircleExclamation} className="fa-3x" />
      <h1>{title}</h1>
      <Link to='/'>Go back to the home page</Link>
    </NotFoundWrapper>
  )
}