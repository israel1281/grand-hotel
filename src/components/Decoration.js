import React from "react";
import styled from "styled-components";
import img from "../assets/deco2.svg";

const DecoOne = styled.div`
  position: absolute;
  width: 30vw;
  z-index: -1;
  right: 0;
  img {
    width: 100%;
    height: auto;
  }
`;

function Decoration() {
  return (
    <DecoOne>
      <img src={img} alt="Page Deco" />
    </DecoOne>
  );
}

export default Decoration;
