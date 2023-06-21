import styled from 'styled-components'

export const Wave = styled.div<{ $background: string }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -1;

  .wave-svg {
    transform: translateY(10px);
  }

  .space-under  {
    height: 100px;
    background-color: ${props => props.$background};
  }
`