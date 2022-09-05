import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { device } from "../utilities/breakpoint";
import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  @media ${device.mobileL} {
    margin: auto;
    margin-top: 2.5rem;
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 0.7px 0.7px 10px #0000004f;
  }

  .image-boxes {
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 70%;
    left: 1rem;
    width: 100%;
    @media ${device.mobileL} {
      width: 104%;
      left: -2%;
    }
    ${(props) =>
      props.alternate &&
      css`
        right: 1rem;
        left: auto;
        @media ${device.mobileL} {
          right: -2%;
        }
      `}

    .image-box {
      width: 30%;
    }
  }
`;

function ImageTypeOne(props) {
  let images = useRef(null);

  useEffect(() => {
    const newImages = Array.from(images.children);
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals("ScrollTrigger", ScrollTrigger);

    newImages.forEach((el) => {
      gsap.from(el, 1.6, {
        opacity: 0,
        y: 30,
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
    <ImageContainer alternate={props.alternate}>
      <img src={props.img1} alt="Room" />

      <div
        className="image-boxes"
        ref={(el) => {
          images = el;
        }}
      >
        <div className="image-box">
          <img src={props.img2} alt="Hotel View" />
        </div>
        <div className="image-box">
          <img src={props.img3} alt="Hotel View" />
        </div>
        <div className="image-box">
          <img src={props.img3} alt="Hotel View" />
        </div>
      </div>
    </ImageContainer>
  );
}

export default ImageTypeOne;
