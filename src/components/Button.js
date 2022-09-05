import React from "react";
import styled, { css, keyframes } from "styled-components";
import { BsArrowRight } from "react-icons/bs";

const slide = keyframes`
from {
  transform:translateX(-2px);
}
to {
  transform:translateX(5px);
}

`;
const ButtonContainer = styled.button`
  margin: 1.5rem 0;
  background-color: var(--black);
  color: var(--white);
  display: flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
  font-size: var(--text-size);
  font-family: var(--text-font);
  transition: all 0.6s;
  svg {
    margin-left: 1rem;
  }
  ${(props) =>
    props.secondary &&
    css`
      background-color: var(--wheat);
      color: var(--black);
    `}

  &:hover {
    transform: translateY(-4px);
    svg {
      animation: ${slide} 0.6s linear infinite;
    }
  }
`;
function Button(props) {
  return (
    <ButtonContainer secondary={props.secondary}>
      {props.title}
      <BsArrowRight />
    </ButtonContainer>
  );
}

export default Button;
