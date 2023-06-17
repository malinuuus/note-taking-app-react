import { keyframes, styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { hoverGrayStyle } from '../../styles';

const onLoadAnimation = keyframes`
    0% {
      opacity: 0;
      transform: translateY(-20%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
`;

export const NoteElement = styled(Link)<{ $delay: number }>`
  -webkit-box-shadow: ${props => props.theme.boxShadow};
  -moz-box-shadow: ${props => props.theme.boxShadow};
  box-shadow: ${props => props.theme.boxShadow};
  min-width: 200px;
  height: 150px;
  margin: 10px 20px 10px 0;
  padding: 10px;
  position: relative;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  background-color: ${props => props.theme.elements};
  inline-size: min-content;
  ${hoverGrayStyle}

  opacity: 0;
  transform: translateY(-20%);
  animation: .5s ${onLoadAnimation} ease-in ${props => `${props.$delay}s`} forwards;
`;

export const Date = styled.span`
  position: absolute;
  bottom: 10px;
`;