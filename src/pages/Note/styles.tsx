import { styled } from "styled-components";
import { Button } from "../../styles";

export const Date = styled.p`
  font-size: 0.8em;
  color: #aeaeae;
  margin: 20px 0 10px 0;
`;

export const ElementsGroup = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;

export const DeleteButton = styled(Button)`
  background-color: #ff9f9f;

  &:hover {
    background-color: #ff8484;
  }
`;