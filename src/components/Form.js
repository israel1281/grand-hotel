import React from "react";
import styled from "styled-components";
import Button from "./Button";

const FormWrap = styled.div`
  width: 100%;
  font-family: var(--heading-font);
  input,
  textarea {
    border-radius: 2px;
    width: 100%;
    padding: 0.8rem;
    border: none;
    margin: 1rem 0;
    font-family: var(--heading-font);
  }
`;

function Form() {
  return (
    <FormWrap>
      <input type="text" name="name" placeholder="Please Enter your name" />
      <input type="email" name="name" placeholder="Enter your Email Address" />
      <input type="text" name="subject" placeholder="Message subject" />
      <textarea
        name="message"
        placeholder="Type message here"
        cols="30"
        rows="10"
      ></textarea>
      <Button title="Send Message" secondary="secondary" />
    </FormWrap>
  );
}

export default Form;
