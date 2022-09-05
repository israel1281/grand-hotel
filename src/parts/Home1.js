import React, { useEffect, useRef } from "react";
import Toptitle from "../components/Toptitle";
import styled from "styled-components";
import Intro from "../components/Intro";
import img1 from "../assets/aboutimg1.jpg";
import img2 from "../assets/aboutimg2.jpg";
import img3 from "../assets/aboutimg3.jpg";
import img4 from "../assets/aboutimg4.jpg";
import { device } from "../utilities/breakpoint";

import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutWrap = styled.section`
  padding: 6rem var(--padding);
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  > div {
    width: 50%;

    @media ${device.mobileL} {
      width: 100%;
    }
  }

  .about-images {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: auto;
    @media ${device.mobileL} {
      margin-top: 1rem;
    }

    .img-one {
      width: 31%;
      border-radius: 5px;
      height: fit-content;

      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
      }
    }
    .img-two {
      position: absolute;
      width: 70%;
      left: 50%;
      transform: translateX(-50%);
      top: 50%;
      border-radius: 5px;

      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
      }
    }
  }
`;

function Home1() {
  let images = useRef(null);

  useEffect(() => {
    const newImages = Array.from(images.children);
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);

    newImages.forEach((el) => {
      gsap.from(el, 1.2, {
        opacity: 0,
        y: 40,
        scale: 1.1,
        transformOrigin: "left",
        ease: Power3.easeOut,
        delay: 0.4,

        scrollTrigger: {
          trigger: el,
          start: "top center+=150",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  return (
    <AboutWrap>
      <div>
        <Toptitle>About Us</Toptitle>
        <Intro
          main="Best-in-class Service"
          sub="Welcome to Grand Hotel Nova We offer class, comfort, hospitality and excitement. Welcome to paradise"
        />
      </div>
      <div
        className="about-images"
        ref={(el) => {
          images = el;
        }}
      >
        <div className="img-one">
          <img src={img1} alt="About Us" />
        </div>
        <div className="img-one">
          <img src={img2} alt="About Us" />
        </div>
        <div className="img-one">
          <img src={img3} alt="About Us" />
        </div>
        <div className="img-two">
          <img src={img4} alt="About Us" />
        </div>
      </div>
    </AboutWrap>
  );
}

export default Home1;
