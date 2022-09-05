import React from "react";
import styled from "styled-components";
import P from "./Paragraph";

const BlogWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--dark-brown);
  margin-bottom: 1.5rem;
  position: relative;

  padding-right: 1rem;

  .img-wrap {
    width: 13rem;
    margin-right: 1rem;
    img {
      width: 100%;
      height: auto;
      margin-bottom: -4px;
    }
  }
  h5 {
    font-family: var(--title-font);
    font-size: var(--subtitle-size);
    margin-bottom: 0.7rem;
    position: relative;
    margin-top: 0.4rem;

    &:after {
      content: "";
      position: absolute;
      width: 3rem;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--brown);
      transform: translateY(5px);
    }
  }
  .author {
    text-align: right;
    font-weight: 600;
    font-style: italic;

    float: right;
  }
`;

function Blog(props) {
  return (
    <BlogWrap>
      <div className="img-wrap">
        <img src={props.img} alt="Blog Article" />
      </div>
      <div className="article">
        <h5 className="title">{props.title}</h5>
        <P>
          {props.article} <span className="author">- by {props.author}</span>
        </P>
      </div>
    </BlogWrap>
  );
}

export default Blog;
