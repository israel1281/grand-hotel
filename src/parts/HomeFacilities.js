import React from "react";
import styled, { css } from "styled-components";
import ImageTypeTwo from "../components/ImageTypeTwo";
import Toptitle from "../components/Toptitle";
import Intro from "../components/Intro";
import Button from "../components/Button";
import { device } from "../utilities/breakpoint";

const Wrap = styled.section`
  padding: 6rem var(--padding);
  display: flex;
  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  ${(props) =>
    props.alternate &&
    css`
      flex-direction: row-reverse;
      @media ${device.mobileL} {
        flex-direction: column;
      }
    `}

  ${(props) =>
    props.none &&
    css`
      padding: 0;
    `}

  ${(props) =>
    props.bottom &&
    css`
      margin-bottom: 6rem;
    `}

  ${(props) =>
    props.partial &&
    css`
      padding: 0 var(--padding);
      padding-bottom: 6rem;
    `}
  

  > .write-up {
    width: 50%;
    @media ${device.mobileL} {
      width: 90%;
    }
  }
`;

function HomeFacilities(props) {
  let first = props.img1;
  let second = props.img2;
  let third = props.img3;
  let fourth = props.title;
  let main = props.main;
  let sub = props.sub;
  let other = props.other;
  let name = props.name;
  let secondary = props.secondary;
  let color = props.color;

  return (
    <Wrap
      alternate={props.alternate}
      none={props.none}
      bottom={props.bottom}
      partial={props.partial}
    >
      <div className="write-up">
        <Toptitle white={color}>{fourth}</Toptitle>
        <Intro main={main} sub={sub} other={other} color={color} />
        <Button title={name} secondary={secondary} />
      </div>
      <ImageTypeTwo img1={first} img2={second} img3={third} />
    </Wrap>
  );
}

export default HomeFacilities;
