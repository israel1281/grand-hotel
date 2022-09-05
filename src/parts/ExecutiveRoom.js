import React from "react";
import styled from "styled-components";
import DarkPageWrap from "../components/DarkPageWrap";

// Assets

import img1 from "../assets/ex1.jpg";
import img2 from "../assets/ex2.jpg";
import img3 from "../assets/ex3.jpg";
import P from "../components/Paragraph";
import Button from "../components/Button";

// Utiities

import { device } from "../utilities/breakpoint";

const ExecutiveWrapper = styled.div`
  color: var(--white);
  h2 {
    font-weight: 600;
    font-family: var(--title-font);
    font-size: var(--mini-size);
    text-align: center;
    margin-bottom: 4rem;
    color: var(--dark-brown);
  }
  .imgs {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    margin-bottom: 1rem;
    @media ${device.mobileL} {
      width: 100%;
    }
    @media ${device.mobileS} {
      flex-direction: column;
      margin-bottom: 0;
    }
    .img-wrap {
      width: 30%;
      @media ${device.mobileS} {
        width: 90%;
        margin:auto;
        margin-bottom: 2rem;
      }
      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0.2px 0.2px 10px #c8570752;
      }
    }
  }
  .info {
    display: flex;
    width: 60%;
    margin: auto;
    margin-top: 4rem;
    justify-content: space-between;
    @media ${device.mobileL} {
      width: 80%;
    }
    @media ${device.mobileS} {
      flex-direction: column;
      width: 100%;
      margin-top: 2rem;
    }
    
    
    p {
      flex: 1;

    }
    .action {
      width: fit-content;
      @media ${device.mobileS} {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
      }
      h5 {
        color: var(--dark-brown);
        font-size: var(--subtitle-size);
        font-weight: 600;
        font-family; var(--text-font);
      }
    }
  }
`;

function ExecutiveRoom() {
  return (
    <DarkPageWrap>
      <ExecutiveWrapper>
        <h2>Executive Villa</h2>
        <div className="imgs">
          <div className="img-wrap">
            <img src={img1} alt="Executive Room 1" />
          </div>
          <div className="img-wrap">
            <img src={img2} alt="Executive Room 1" />
          </div>
          <div className="img-wrap">
            <img src={img3} alt="Executive Room 1" />
          </div>
        </div>
        <div className="info">
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, et
            autem. Ratione consequuntur non quidem modi maiores harum, dolore
            recusandae.
          </P>
          <div className="action">
            <h5>$5000 / night</h5>
            <Button title="Book Now" secondary />
          </div>
        </div>
      </ExecutiveWrapper>
    </DarkPageWrap>
  );
}

export default ExecutiveRoom;
