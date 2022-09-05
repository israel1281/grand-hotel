import React from "react";
import styled from "styled-components";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";

const Icons = styled.div`
  margin-top: 1rem;
  svg {
    margin-right: 1rem;
    height: 1.5rem;
    color: var(--brown);
  }
`;

function SocialIcons() {
  return (
    <Icons>
      <FiFacebook />
      <SiInstagram />
      <FiTwitter />
    </Icons>
  );
}

export default SocialIcons;
