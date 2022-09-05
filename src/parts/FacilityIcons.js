import React from "react";
import styled from "styled-components";

// Assets
import icon1 from "../assets/icons/wifi.png";
import icon2 from "../assets/icons/butler.png";
import icon3 from "../assets/icons/phone.png";
import icon4 from "../assets/icons/laundry.png";
import icon5 from "../assets/icons/taxi.png";
import icon6 from "../assets/icons/atm.png";
import icon7 from "../assets/icons/ac.png";
import icon8 from "../assets/icons/camera.png";
import icon9 from "../assets/icons/parking.png";
import icon10 from "../assets/icons/dryer.png";

// Components
import P from "../components/Paragraph";
import Toptitle from "../components/Toptitle";

// Utilities
import { device } from "../utilities/breakpoint";

const IconWrapper = styled.section`
  padding: 0 var(--padding);
  margin-top: 6rem;
  text-align: center;

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    @media ${device.mobileL} {
      grid-template-columns: 1fr 1fr 1fr;
    }

    grid-gap: 3rem;
    > .box {
      margin-bottom: 3rem;
      text-align: center;

      img {
        height: 1.8rem;
        width: fit-content;
        margin: auto;
        margin-bottom: 2rem;
      }
    }
  }
`;

function FacilityIcons() {
  return (
    <IconWrapper>
      <Toptitle centered>Facilities</Toptitle>

      <div className="items">
        <div className="box">
          <img src={icon1} alt="Free Wifi Icon" />
          <P>Free Wifi</P>
        </div>
        <div className="box">
          <img src={icon2} alt="Butler Services Icon" />
          <P>Butler Services</P>
        </div>
        <div className="box">
          <img src={icon3} alt="Telephone Icon" />
          <P>Telephone</P>
        </div>
        <div className="box">
          <img src={icon4} alt="Laundry Icon" />
          <P>Laundry</P>
        </div>
        <div className="box">
          <img src={icon5} alt="Pickup Taxi Icon" />
          <P>Pickup Taxi</P>
        </div>
        <div className="box">
          <img src={icon6} alt="ATM Icon" />
          <P>ATM</P>
        </div>
        <div className="box">
          <img src={icon7} alt="Air-Conditioned rooms Icon" />
          <P>Air-Conditioned rooms</P>
        </div>
        <div className="box">
          <img src={icon8} alt="CCTV Icon" />
          <P>CCTV</P>
        </div>
        <div className="box">
          <img src={icon9} alt="Parking space Icon" />
          <P>Parking space</P>
        </div>
        <div className="box">
          <img src={icon10} alt="Hair Dryer Icon" />
          <P>Hair Dryer</P>
        </div>
      </div>
    </IconWrapper>
  );
}

export default FacilityIcons;
