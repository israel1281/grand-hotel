import React from "react";
import styled from "styled-components";

// Components
import DarkPageWrap from "../components/DarkPageWrap";
import ImageTypeOne from "../components/ImageTypeOne";
import Toptitle from "../components/Toptitle";
import Intro from "../components/Intro";
import Button from "../components/Button";

// Assets
import img1 from "../assets/suite1.jpg";
import img2 from "../assets/suite2.jpg";
import img3 from "../assets/suite3.png";
import img4 from "../assets/suite4.png";
import img5 from "../assets/suite5.png";
import img6 from "../assets/suite6.png";
import img7 from "../assets/suite7.png";
import img8 from "../assets/suite8.png";

// Utilities
import { device } from "../utilities/breakpoint";

const RoomsPreview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.bottom}rem;
  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }

  > div {
    width: 48%;
    @media ${device.mobileL} {
      width: 100%;
    }
  }
  > .room {
    margin: auto;
    @media ${device.mobileL} {
      width: 80%;
      margin-top: 2rem;
      margin: auto;
    }
    @media ${device.mobileS} {
      width: 95%;
    }
  }
`;

const RoomDesc = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--white);
  margin-top: 2rem;

  h5 {
    font-family: var(--text-color);
    font-size: var(--title-font);
    font-weight: 600;
  }
  p {
    font-size: var(--subtitle-font);
    color: var(--brown);
    font-family: var(--heading-font);
  }
`;

function RoomsPreviews() {
  return (
    <DarkPageWrap>
      <RoomsPreview bottom="5">
        <div className="room">
          <ImageTypeOne img1={img1} img2={img2} img3={img3} img4={img4} />
          <RoomDesc>
            <h5>Standard Twin Room</h5>
            <p>$250/night</p>
          </RoomDesc>
        </div>

        <div>
          <Toptitle white>Rooms and Suites</Toptitle>
          <Intro
            main="Choose the Perfect Rooms and Accomodation for you"
            sub="Our rooms at Grand Hotel Nova are tastefully decorated and provided with every modern amenity for your comfort and relaxation"
            other="Whether you're planning a family weekend getaway or you're on a professional business trip; enjoy modern, tranquil and comfortable rooms, just as you like it."
            color="white"
          />
        </div>
      </RoomsPreview>

      <RoomsPreview>
        <div className="room">
          <ImageTypeOne img1={img5} img2={img6} img3={img7} img4={img8} />
          <RoomDesc>
            <h5>Single Deluxe Room</h5>
            <p>$300/night</p>
          </RoomDesc>
        </div>

        <div>
          <Intro
            sub="Choose from a range of neat and comfortable rooms available. You'll know we offer value when you see them"
            other="Whether you're planning a family weekend getaway or you're on a professional business trip; enjoy modern, tranquil and comfortable rooms, just as you like it."
            color="white"
          />
          <Button title="See More" secondary />
        </div>
      </RoomsPreview>
    </DarkPageWrap>
  );
}

export default RoomsPreviews;
