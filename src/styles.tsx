import { styled } from "styled-components";

// global styles
export const Button = styled.button`
  padding: 10px 20px;
  font-family: inherit;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: inherit;
  cursor: pointer;
  transition: background-color 250ms;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const DisabledButton = styled(Button)`
  pointer-events: none;
  color: #dbdbdb;
  border-color: #dbdbdb;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;