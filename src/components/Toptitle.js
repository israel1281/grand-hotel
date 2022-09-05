import styled, { css } from "styled-components";

const Toptitle = styled.h4`
  font-family: var(--title-font);
  font-size: 1.1rem;
  color: var(--brown);
  position: relative;
  margin: auto;
  margin-bottom: 3rem;
  letter-spacing: 0.2rem;
  ${(props) =>
    props.centered &&
    css`
      width: fit-content;
    `}

  &:before {
    content: "";
    position: absolute;
    width: 3rem;
    height: 2px;
    top: 0;
    left: 0;
    background-color: var(--black);
    transform: translateY(-7px);
    ${(props) =>
      props.centered &&
      css`
        width: 3.5rem;
        left: 50%;
        transform: translateY(-7px) translateX(-50%);
      `}

    ${(props) =>
      props.white &&
      css`
        background-color: var(--brown);
      `}
  }
`;

export default Toptitle;
