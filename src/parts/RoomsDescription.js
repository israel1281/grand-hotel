import React from "react";
import styled, { css } from "styled-components";
import Button from "../components/Button";
import ImageTypeOne from "../components/ImageTypeOne";
import P from "../components/Paragraph";
import { device } from "../utilities/breakpoint";

const RoomsWrap = styled.div`
  padding: 3rem var(--padding);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.alternate &&
    css`
      flex-direction: row-reverse;
      @media ${device.mobileL} {
        flex-direction: column;
      }
    `}
  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }
  > div {
    width: 45%;
    @media ${device.mobileL} {
      width: 95%;
    }
  }
  h2 {
    font-size: var(--mini-size);
    font-family: var(--title-font);
    color: var(--black);
    margin-bottom: 1rem;
    font-weight: 600;
  }
  h5 {
    font-weight: 600;
    font-family: var(--text-font);
    font-size: var(--subtitle-size);
    color: var(--brown);
  }
  .action {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

function RoomsDescription(props) {
  const {
    img1,
    img2,
    img3,
    img4,
    title,
    price,
    alternate,
    name,
    details,
  } = props;
  return (
    <RoomsWrap alternate={alternate}>
      <ImageTypeOne
        alternate={alternate}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
      />
      <div>
        <h2>{name}</h2>
        <P>{details}</P>
        <div className="action">
          <h5>${price} / night</h5>
          <Button title={title} />
        </div>
      </div>
    </RoomsWrap>
  );
}

export default RoomsDescription;
