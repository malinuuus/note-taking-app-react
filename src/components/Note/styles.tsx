import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const NoteElement = styled(Link)`
  -webkit-box-shadow: 8px 8px 29px -11px rgba(66, 68, 90, 1);
  -moz-box-shadow: 8px 8px 29px -11px rgba(66, 68, 90, 1);
  box-shadow: 8px 8px 29px -11px rgba(66, 68, 90, 1);
  min-width: 200px;
  height: 150px;
  margin: 10px 20px 10px 0;
  padding: 10px;
  position: relative;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 250ms;
  color: inherit;

  &:hover {
    transform: translate(-5px, -5px);
  }
`;

export const Date = styled.span`
  position: absolute;
  bottom: 10px;
`;