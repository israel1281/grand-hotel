import React, { useEffect, useRef } from "react";
import Intro from "../components/Intro";
import styled from "styled-components";
import img1 from "../assets/needimg1.jpg";
import img2 from "../assets/needimg2.jpg";
import img3 from "../assets/needimg3.jpg";
import { device } from "../utilities/breakpoint";

import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NeedWrap = styled.section`
  display: flex;
  padding: var(--padding);
  justify-content: space-between;
  padding-top: 0;
  align-items: center;

  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }

  > div {
    width: 48%;
    @media ${device.mobileL} {
      width: 100%;
    }
  }

  .need-images {
    display: flex;
    justify-content: space-between;
    @media ${device.mobileL} {
      margin: 2rem 0;
    }

    .img-contain {
      width: 30%;
      height: max-content;

      img {
        width: 100%;
        height: auto;
      }
    }

    .img-contain:nth-child(2) {
      margin-top: 2rem;
    }

    .img-contain:nth-child(3) {
      margin-top: 4rem;
    }
  }
`;

function Needs() {
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
    <NeedWrap>
      <div
        className="need-images"
        ref={(el) => {
          images = el;
        }}
      >
        <div className="img-contain">
          <img src={img1} alt="Home" />
        </div>
        <div className="img-contain">
          <img src={img2} alt="Home" />
        </div>
        <div className="img-contain">
          <img src={img3} alt="Home" />
        </div>
      </div>
      <div>
        <Intro
          main="We Anticipate Your Needs"
          sub="At Grand Hotel Nova, we make sure that all you deserve in a home away from home is available"
          other="From lush green serene environments to the beautiful and healthy ambience in our rooms, we make it worth evry while"
        />
      </div>
    </NeedWrap>
  );
}

export default Needs;
