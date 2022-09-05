import React from "react";
import styled from "styled-components";
import logo from "../assets/logoblue.png";
import P from "./Paragraph";
import { device } from "../utilities/breakpoint";

const Wrapper = styled.section`
  background-color: var(--wheat);
  padding: 2rem var(--padding);
  text-align: center;

  .top {
    margin: 1rem 0;
    margin-top: 2rem;

    .logo-container {
      display: flex;
      width: fit-content;
      align-items: center;
      margin: auto;
      margin-bottom: 0.5rem;

      img {
        width: 3rem;
      }

      h5 {
        font-weight: 600;
        font-family: var(--title-font);
        font-size: var(--subtitle-size);
        margin-left: 0.4rem;
        color: var(--nav-blue);

        span {
          font-weight: 700;
        }
      }
    }
  }

  .bottom {
    display: grid;
    max-width: 80%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 1rem;

    @media ${device.mobileL} {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 3rem;
    }
  }

  h2 {
    font-size: var(--title-size);
    font-weight: 400;
    font-family: var(--title-font);
    color: var(--nav-blue);
  }
`;

function Clients() {
  return (
    <Wrapper>
      <div className="top">
        <span className="logo-container">
          <img src={logo} alt="site-logo" />
          <h5>
            Grand Hotel <span>Nova</span>
          </h5>
        </span>
        <P>Finally, Hospitalty has A Name</P>
      </div>
      <div className="bottom">
        <div className="item">
          <h2>100k+</h2>
          <P>Clients Woldwide</P>
        </div>

        <div className="item">
          <h2>5k+</h2>
          <P>Reviews</P>
        </div>

        <div className="item">
          <h2>25</h2>
          <P>Global Awards</P>
        </div>

        <div className="item">
          <h2>13</h2>
          <P>Years of Service</P>
        </div>
      </div>
    </Wrapper>
  );
}

export default Clients;
