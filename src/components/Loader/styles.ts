import { styled } from "styled-components";

export const LoaderWrapper = styled.div`
  text-align: center;
  margin-top: 20vh;

  p {
    margin-top: 20px;
  }
`

export const Spinner = styled.span<{ $size: number }>`
  display: inline-block;
  position: relative;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border: 2px solid #fff;
    animation: loader-spinner 1s ease-in infinite;
    border-radius: 50%;
  }

  &::before {
    width: 70%;
    height: 70%;
    left: 15%;
    top: 15%;
    border-bottom-color: transparent;
  }

  &::after {
    width: 100%;
    height: 100%;
    left: 0;
    border-left-color: transparent;
    animation-direction: reverse;
  }

  @keyframes loader-spinner {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`