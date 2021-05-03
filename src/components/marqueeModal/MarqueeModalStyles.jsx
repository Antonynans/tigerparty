import styled from 'styled-components/macro';

// @global": {
//   body: {
//     overflow: "hidden",
//     textAlign: 'center'
    

export const ModalOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    opacity: 1;
    animation: show .5s ease;
    overflow-x: hidden;;
    overflow-y: auto;

    @keyframes show {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: flex;
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`;

export const Modals = styled.div`
  width: 70%;
  background-color: #fff;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0.2);
  position: relative;
  padding: 1rem;

  @media (min-width: 576px) {
    width: 700px;
    text-align: left;
  }

  & p:last-of-type {
    margin-bottom: 0;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #fff;
  width: 2.5rem;
  height: 2.0rem;
  padding: 0;
  border: 0;
  cursor: pointer;
  outline: 0;
  box-shadow: none;

  &::before &::after {
    content: '""';
    position: absolute;
    top: 1.2rem;
    left: 0.25rem;
    width: 1.5rem;
    height: 0.1rem;
    background-color: #000;
  }

  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(45deg);
  }
`;



