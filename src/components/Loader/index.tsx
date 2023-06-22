import { styled } from "styled-components"

const LoaderWrapper = styled.div`
  text-align: center;
  margin-top: 10%;
`

export const Loader = () => {
  return (
    <LoaderWrapper>
      <h1>Loading...</h1>
    </LoaderWrapper>
  )
}
