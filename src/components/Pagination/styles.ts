import { styled } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    background: ${props => props.theme.elements};
    border-radius: 10px;
    z-index: 1;
  }

  ul > li {
    height: 3em;
    position: relative;
  }

  ul a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    height: 100%;
    padding: 0 1em;
  }

  ul > li,
  ul .fa-icon {
    transition: .2s color linear;
  }

  ul > li:not(.active):not(.disabled):hover,
  ul > li:hover a:not(.disabled) .fa-icon {
    color: #36f5bf;
  }

  ul > li:first-child a {
    padding-right: 0;
  }

  ul > li:last-child a {
    padding-left: 0;
  }

  .disabled,
  .active {
    pointer-events: none;
  }
  
  .disabled .fa-icon {
    color: ${props => props.theme.disabledFont};
  }

  .active {
    color: black;
  }

  .active::before {
    content: '';
    display: block;
    width: 1.4em;
    height: 1.8em;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transform: translate(-50%, -50%);
    background: #36f5bf;
    border-radius: 5px;
  }
`