import React from "react";
import styled from "styled-components";
import Intro from "../components/Intro";
import P from "../components/Paragraph";
import Testimony from "../components/Testimony";
import Toptitle from "../components/Toptitle";
import user1 from "../assets/avatar1.png";
import user2 from "../assets/avatar2.png";
import { device } from "../utilities/breakpoint";

const TestimonialWrap = styled.section`
  padding: 0 var(--padding);
  display: flex;
  justify-content: space-between;
  padding-bottom: 3rem;
  @media ${device.mobileL} {
    flex-direction: column;
    margin-top: 1rem;
  }

  > div {
    width: 48%;
    @media ${device.mobileL} {
      width: 100%;
    }
  }
`;

function Testimonial() {
  return (
    <TestimonialWrap>
      <div>
        <Toptitle>Testimonials</Toptitle>
        <Intro
          main="What Our Customers Are Saying"
          sub="We offer services beyond rooms. They are unbeatable experiences and that is why our customers agree too."
        />
      </div>
      <div>
        <div>
          <P>
            "stayed here on business, all of the hotel staff were extremely
            friendly and helpful. The food was great. The outdoor pool was
            excellent, with tennis court, table tennis, gynassium, all very
            good.
          </P>
          <Testimony
            img={user1}
            name="Andy S."
            location="Bristol, United Kingdom"
          />
        </div>
        <div>
          <P>
            "Incredible personal involvement by the management of the hotel.
            Really nice rooms with all necessary amenities provided.
          </P>
          <Testimony
            img={user2}
            name="Roand G.."
            location="Haaltert, Belgium"
          />
        </div>
      </div>
    </TestimonialWrap>
  );
}

export default Testimonial;
