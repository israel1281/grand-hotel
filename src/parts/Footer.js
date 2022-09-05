import React from "react";
import styled from "styled-components";
import bg from "../assets/fbg.jpg";
import logo from "../assets/logowhite.svg";
import { Link } from "react-router-dom";
import { device } from "../utilities/breakpoint";
import SocialIcons from "../components/SocialIcons";

const FooterWrap = styled.footer`
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  padding: 0.6rem 0;
  color: var(--white);
  font-family: var(--heading-font);

  section.top {
    margin: 4rem var(--padding);
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    @media ${device.mobileL} {
      grid-template-columns: 2fr 1fr;
      grid-row-gap: 3rem;
    }
    @media ${device.mobileS} {
      grid-template-columns: 2fr;
      grid-row-gap: 3rem;
      align-items: center;
      text-align: center;
    }

    .logo-area {
      display: flex;
      align-items: center;
      margin-bottom: 1.3rem;
      @media ${device.mobileL} {
        width: max-content;
        margin-left: auto;
        margin-right: auto;
      }

      img {
        width: 2.5rem;
        margin-right: 0.4rem;
      }
      h5 {
        font-size: 1.3rem;
        font-weight: 500;
        font-family: var(--title-font);
        color: var(--brown);
        span {
          font-weight: 700;
        }
      }
    }
    h6 {
      font-weight: 600;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      color: var(--brown);
    }

    a {
      color: var(--white);
      text-decoration: none;
      display: block;
      margin-bottom: 0.6rem;
      font-size: var(--text-size);
    }
    p {
      margin-bottom: 0.6rem;
      font-size: var(--text-size);
    }
  }

  section.bottom {
    background: var(--white);
    color: var(--nav-blue);
    display: flex;
    justify-content: space-between;
    padding: 1.7rem var(--padding);
    height: fit-content;
    @media ${device.mobileL} {
      flex-direction: column;
      align-items: center;
    }

    p {
      color: var(--nav-bue);
      font-size: var(--text-size);
      @media ${device.mobileL} {
        margin-bottom: 1rem;
      }
    }
    a {
      text-decoration: none;
      font-size: var(--text-size);
      color: var(--black);
      margin-left: 0.5rem;
    }
  }
`;
function Footer() {
  return (
    <FooterWrap>
      <section className="top">
        <div>
          <span className="logo-area">
            <img src={logo} alt="Logo White" />
            <h5>
              Grand Hotel <span>Nova</span>
            </h5>
          </span>
          <p>Grand Hotel Nova via Regina,</p>
          <p>8 - 22016, Nova, Lago di Como</p>
          <p>Italia</p>
          <p>P.IVA 00349270</p>
          <div className="social-icons">
            <SocialIcons />
          </div>
        </div>
        <div>
          <h6>Contact Us</h6>
          <p>+2347054463371</p>
          <p>+2348109819775</p>
          <p>services@grandnova.com</p>
        </div>

        <div>
          <h6>Menu</h6>
          <Link to="/"> Welcome </Link>
          <Link to="/rooms"> Rooms and Rates </Link>
          <Link to="/facilties"> Facilities </Link>
        </div>

        <div>
          <h6>Company</h6>
          <Link to="/"> Services </Link>
          <Link to="/"> Careers </Link>
          <Link to="/"> Contact Us </Link>
          <Link to="/"> Reviews </Link>
        </div>
      </section>

      <section className="bottom">
        <p> &#169; 2020 | All rights reserved. Grand Hotel Nova</p>
        <div>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Use</Link>
        </div>
      </section>
    </FooterWrap>
  );
}

export default Footer;
