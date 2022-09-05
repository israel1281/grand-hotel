import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { device } from "../utilities/breakpoint";
import { TimelineLite, Power3 } from "gsap";

const LandingWrapper = styled.div`
  height: 670px;
  width: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--padding);
  background-position: center;
  @media ${device.mobileS} {
    height: 95vh;
  }

  div {
    transform: translateY(13rem);
    color: var(--white);
    @media ${device.mobileL} {
      transform: translateY(20rem);
      @media ${device.mobileS} {
        transform: translateY(50vh);
      }
    }

    h1 {
      font-size: var(--title-size);
      font-family: var(--heading-font);
      margin: 0.5rem 0.5rem;
      font-weight: 600;
    }

    p {
      font-size: 1.05rem;
      margin-left: 0.5rem;
      font-family: var(--heading-font);
    }
  }
`;

function Landing(props) {
  let mainBox = useRef(null);

  useEffect(() => {
    let tl = new TimelineLite();

    tl.staggerFrom(
      mainBox.children,
      0.6,
      {
        opacity: 0,
        y: 20,
        transformOrigin: "bottom",
        overflow: "hidden",
        ease: Power3.easeOut,
        delay: 3.7,
      },
      0.2
    );
  }, []);
  return (
    <LandingWrapper img={props.img}>
      <div
        ref={(el) => {
          mainBox = el;
        }}
      >
        <h1>{props.title}</h1>
        <h1>{props.secondTitle}</h1>
        <p>{props.subtitle}</p>
      </div>
    </LandingWrapper>
  );
}

export default Landing;
