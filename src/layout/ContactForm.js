import React from "react";
import styled from "styled-components";
import colors from "../styles/Colors";

function ContactForm() {
  return (
    <Container>
      <ContactSheet>
        <ContactInput>
          <input type="text" id="name" placeholder="Full name" />
          <label htmlFor="name">Your Name</label>
        </ContactInput>
        <ContactInput>
          <input type="text" id="email" placeholder="Your Email" />
          <label htmlFor="email">Your Email</label>
        </ContactInput>
      </ContactSheet>
    </Container>
  );
}

export default ContactForm;

const Container = styled.div`
  width: 60vw;
  height: 250px;
  height: 50rem;
  background: ${colors.grad2}, purple;
  background-size: cover;
  border-radius: 2px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
`;

const ContactSheet = styled.div`
  width: 50%;
  padding: 6rem;
`;
const ContactInput = styled.div`
  :not(:last-child) {
    margin-bottom: 2rem;
  }
  input {
    font-family: inherit;
    font-size: 1.6rem;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background: rbga(255, 255, 255, 0.5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    caret-color: orange;

    :focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
      border-bottom: 3px solid ${colors.primary};

      :invalid {
        border-bottom: 3px solid red;
      }
    }
    ::placeholder {
      color: ${colors.grey9};
    }
  }
  label {
    font-size: 1.2rem;
    margin-left: 2rem;
    margin-top: 0.7rem;
    font-weight: 700;
    display: block;
  }

  input:placeholder-shown + label {
    color: red;
  }
`;
