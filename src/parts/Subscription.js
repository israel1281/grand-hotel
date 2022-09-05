import React from "react";
import styled from "styled-components";
import Intro from "../components/Intro";
import bg from "../assets/sbg.png";
import { device } from "../utilities/breakpoint";

const Wrapper = styled.section`
  padding: 4rem var(--padding);
  background-image: url(${bg});
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${device.mobileL} {
    flex-direction: column;
    text-align: center;
  }

  div {
    width: 40%;
    @media ${device.mobileS} {
      width: 80%;
    }
  }

  form {
    color: var(--black);
    dispay: flex;
    align-items: flex-end;

    input {
      border-radius: 0;
      outline: none;
      border: none;
      width: 16rem;
      padding: 0.5rem 0.9rem;
      font-size: var(--text-size);
    }

    button {
      padding: 0.5rem 0.9rem;
      font-size: var(--text-size);
      outline: none;
      border: none;
      background-color: var(--btn);
      font-weight: 600;
    }
  }
`;

function Subscription() {
  return (
    <Wrapper>
      <Intro
        main="Stay in the Loop"
        sub="Subscribe to our newsletter for regular updates on stories, events and special offers from us"
        color="white"
      />
      <form action="">
        <input type="email" />
        <button>Subscribe</button>
      </form>
    </Wrapper>
  );
}

export default Subscription;
