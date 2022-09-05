import styled from "styled-components";
import { device } from "../utilities/breakpoint";

const ToogleBtn = styled.div`
  position: absolute;
  z-index: 3;
  cursor: pointer;
  right: var(--padding);
  top: 50%;
  transform: translateY(-50%);
  display: none;

  @media ${device.mobileL} {
    display: block;
  }

  div {
    width: 2rem;
    height: 0.3rem;
    background: var(--active-blue);
    transition: all 0.6s ease-out;
    border-radius: 5px;
  }
  div:nth-child(2) {
    margin: 0.3rem 0;
  }

  &.open {
    div:nth-child(1) {
      background-color: var(--nav-blue);
      transform: rotate(45deg) translateY(12px) translateX(7px);
    }
    div:nth-child(2) {
      transform: translateX(-50px);
      opacity: 0;
    }
    div:nth-child(3) {
      background-color: var(--nav-blue);
      transform: rotate(-45deg) translateY(-5px) translateX(-1px);
    }
  }
`;

export default ToogleBtn;
