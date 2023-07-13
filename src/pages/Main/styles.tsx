import { styled } from 'styled-components';
import { Wrapper } from '../../styles';

export const MainWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`

export const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

export const InputGroup = styled.div`
  background: ${props => props.theme.inputBackground};
  padding: 5px;
  margin: 10px 0;
  border-radius: 10px;
`;

export const Input = styled.input`
  background: inherit;
  padding: 5px;
  margin-left: 5px;
  border: none;
  color: inherit;
`;