import { LoaderWrapper, Spinner } from './styles'

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner $size={80}></Spinner>
      <p>loading...</p>
    </LoaderWrapper>
  )
}
