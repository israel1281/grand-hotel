import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { device } from "../utilities/breakpoint";
import ToogleBtn from "./Toogle";

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 0.6rem var(--padding);
  display: flex;
  background: var(--white);
  z-index: 4;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0);
  transition: all 1s;
  &.scroll {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.35);
    transition: all 1s;
  }

  .logo {
    width: fit-content;
    display: flex;
    align-items: center;
    img {
      width: 4rem;
    }
    h3 {
      font-family: var(--title-font);
      font-size: 1.3rem;
      margin-left: 0.5rem;
      color: var(--nav-blue);
      @media ${device.mobileS} {
        font-size: 1.1rem;
      }
    }
  }
  .nav {
    display: flex;
    margin-left: auto;
    align-items: center;
    transition: all 0.6s;

    @media ${device.mobileL} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      position: absolute;
      overflow: hidden;
      width: 89vw;
      height: 0;
      padding: 0;
      background-color: var(--nav-blue);
      transition: all 0.5s;
      border-radius: 5px;
      left: 50%;
      transform: translateX(-50%);
      top: 3.8rem;

      &.open {
        height: 50vh;
        padding: 3rem;
        a {
          font-size: var(--subtitle-size);
          height: max-content;

          &:before {
            height: 3px;
          }
        }
      }
    }

    a {
      margin-left: 3rem;
      font-size: var(--text-size);
      font-family: var(--text-font);

      font-weight: 700;
      text-decoration: none;
      color: var(--black);
      position: relative;
      padding: 0.5rem;

      @media ${device.mobileL} {
        width: max-content;
        z-index: 3;
        color: var(--wheat);

        margin-left: 0;
        height: 0;
        font-size: 0;
      }

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: 0;
        background: var(--active-blue);
        border-radius: 5px;
        height: 2px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;

        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
        @media ${device.mobileL} {
          z-index: 1;
          background: var(--brown);
          height: 0;
        }
      }
      &.selected:before {
        left: 0;
        right: 0;
      }

      &:hover:before,
      &.selected:before {
        left: 0;
        right: 0;
      }
    }
  }
`;

function Navigation() {
  const [nav, setnav] = useState(false);
  const [scroll, setscroll] = useState(false);

  let menu = useRef(null);
  let btn = useRef(null);

  const addShadow = () => {
    if (window.scrollY >= 800) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };
  window.addEventListener("scroll", addShadow);

  useEffect(() => {
    if (nav) {
      menu.classList.add("open");
      btn.classList.add("open");
    } else {
      menu.classList.remove("open");
      btn.classList.remove("open");
    }
  }, [nav]);

  return (
    <NavWrapper className={scroll ? "scroll" : ""}>
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Hotel Logo" />
        </NavLink>
        <h3>Grand Hotel Nova</h3>
      </div>
      <div
        className="nav"
        ref={(el) => {
          menu = el;
        }}
      >
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="selected" to="/rooms">
          Rooms
        </NavLink>
        <NavLink activeClassName="selected" to="/facilities">
          Facilities
        </NavLink>
        <NavLink activeClassName="selected" to="/contact">
          Contact
        </NavLink>
      </div>
      <ToogleBtn
        onClick={() => {
          setnav(!nav);
        }}
        ref={(el) => (btn = el)}
      >
        <div></div>
        <div></div>
        <div></div>
      </ToogleBtn>
    </NavWrapper>
  );
}

export default Navigation;
