import React from "react";
import styled from "styled-components";

function Button({ text, color, bgColor }) {
  return (
    <ButtonStyle color={color} bgColor={bgColor}>
      {text}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  height: 40px;
  width: 256px;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  display: flex;
  color: ${(props) => props.color};
  background: ${(props) => props.bgColor};
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  cursor: pointer;
  margin: 8px;
  outline: none;
  border: none;
  transition: all 0.2s;
  position: relative;

  :hover {
    color: hotpink;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:after {
    content: "fef";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  :hover&::after {
    transform: scale(1.4) scale(1.6);
    opacity: 0;
  }
`;

export default Button;
