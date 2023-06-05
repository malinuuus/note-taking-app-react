import { styled } from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  input,
  textarea {
    padding: 5px;
    font-family: inherit;
  }

  textarea {
    height: 200px;
  }
`;