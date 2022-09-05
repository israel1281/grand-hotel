import styled, { css } from "styled-components";
import { device } from "../utilities/breakpoint";

const PageLoad = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;

  > div {
    position: relative;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: #05042e;
    width: 0%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  ${(props) =>
    props.contact &&
    css`
      > div {
        
        background-color: #05042e;
       `}
  ${(props) =>
    props.last &&
    css`
        > div {
          
          background-color: #c85807;
          `}

  .img {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
    overflow: hidden;
    height: 7vw;
    width: 14vw;

    @media ${device.mobileL} {
      height: 15vw;
      width: 35vw;
    }

    img {
      height: 7vw;
      @media ${device.mobileL} {
        height: 15vw;
      }
    }
  }
  .text {
    overflow: hidden;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  h1 {
    font-size: 5vw;
    opacity: 0;
    font-family: var(--title-font);
    color: var(--brown);
    ${(props) =>
      props.last &&
      css`
        color: var(--nav-blue);
      `}
    @media ${device.mobileL} {
      font-size: 10vw;
    }
  }
`;

export default PageLoad;
