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
  background-color: ${props => props.theme.red};

  &:hover {
    background-color: ${props => props.theme.redOnHover};
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .5em;
  width: 50%;
  margin-top: 30px;
`;

export const Tag = styled.span`
  background-color: #2f4eff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const NoteParagraph = styled.p`
  word-break: break-word;
  min-height: 1.4em;

  a {
    color: #878787;
  }
`