import React from "react";
import styled from "styled-components";

const TestimonyWrap = styled.div`
  display: flex;
  margin-top: 0.7rem;
  margin-bottom: 3rem;

  img {
    width: 3rem;
    margin-right: 1rem;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  h6 {
    font-size: var(--text-size);
    font-family: var(--heading-font);
    font-weight: 600;
    color: var(--black);
  }

  p {
    font-size: var(--text-size);
    font-family: var(--heading-font);
    color: var(--brown);
    font-style: italic;
    font-weight: 600;
  }
`;

function Testimony(props) {
  return (
    <TestimonyWrap>
      <img src={props.img} alt="User" />
      <div>
        <h6>{props.name}</h6>
        <p>{props.location}</p>
      </div>
    </TestimonyWrap>
  );
}

export default Testimony;
