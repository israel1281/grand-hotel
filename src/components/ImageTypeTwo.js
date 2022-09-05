import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { device } from "../utilities/breakpoint";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImgWrapper = styled.div`
  position: relative;
  width: 40%;
  margin-bottom: -3rem;

  @media ${device.mobileL} {
    width: 80%;
    margin: auto;
    margin-bottom: -3rem;
    margin-top: 2.5rem;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0.7px 0.7px 10px #0000004f;
  }
  > div {
    display: flex;
    width: 105%;
    transform: translateY(-50%) translateX(-5%);

    .img-container {
      width: 52%;
    }

    .img-container:nth-child(1) {
      z-index: 1;
      transform: scale(1.2) translateY(20px) translateX(15px);
    }

    .img-container:nth-child(2) {
      z-index: 4;
      transform: translateY(-5%) translateX(9px);
    }
  }
`;

function ImageTypeTwo(props) {
  let image1 = useRef(null);
  let image2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);

    gsap.from(image1, 1.6, {
      opacity: 0,

      y: -30,
      transformOrigin: "left",
      ease: Power3.easeOut,
      delay: 0.4,

      scrollTrigger: {
        trigger: image1,
        start: "top center+=150",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(image2, 1.2, {
      opacity: 0,
      y: 30,
      scale: 1.1,
      transformOrigin: "left",
      ease: Power3.easeOut,
      delay: 0.4,

      scrollTrigger: {
        trigger: image2,
        start: "top center+=150",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <ImgWrapper>
      <img
        src={props.img1}
        alt="Hotel"
        ref={(el) => {
          image1 = el;
        }}
      />
      <div>
        <div className="img-container">
          <img src={props.img2} alt="Hotel Sub" />
        </div>
        <div
          className="img-container"
          ref={(el) => {
            image2 = el;
          }}
        >
          <img src={props.img3} alt="Hotel Sub" />
        </div>
      </div>
    </ImgWrapper>
  );
}

export default ImageTypeTwo;
