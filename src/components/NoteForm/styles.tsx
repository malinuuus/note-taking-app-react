import { styled } from "styled-components";

export const InputGroup = styled.div<{ $redShadow?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  input,
  textarea {
    padding: 5px;
    font-family: inherit;
    border: 1px solid #000;
    -webkit-box-shadow: ${props => props.$redShadow ? 'inset 0px 0px 11px -3px rgba(255, 38, 38, 1)' : 'auto'};
    -moz-box-shadow: ${props => props.$redShadow ? 'inset 0px 0px 11px -3px rgba(255, 38, 38, 1)' : 'auto'};
    box-shadow: ${props => props.$redShadow ? 'inset 0px 0px 11px -3px rgba(255, 38, 38, 1)' : 'auto'};
  }

  textarea {
    height: 200px;
  }
`;

export const RequiredMessage = styled.span`
  color: #fe1212;
  margin-left: 10px;
  font-size: .8em;
`;