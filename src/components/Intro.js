import React from "react";
import styled from "styled-components";
import P from "./Paragraph";

const Wrapper = styled.div`
  color: ${(props) => (props.color ? `var(--white)` : `var(--black)`)};

  h5 {
    font-size: var(--mini-size);
    font-family: var(--title-font);
    margin-bottom: 1rem;
  }
`;

function Intro(props) {
  return (
    <Wrapper color={props.color}>
      <h5>{props.main}</h5>
      <P bottom="1.5">{props.sub}</P>
      <P>{props.other}</P>
    </Wrapper>
  );
}

export default Intro;
