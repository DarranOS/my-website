import React from "react";
import styled from "styled-components";
import colors from "../styles/Colors";

function MainButton({ link, text, color, bgColor, hover, noShadow }) {
  return (
    <ButtonStyle color={color} hover={hover} bgColor={bgColor} noShadow={noShadow}>
      <a href={link}>{text}</a>
    </ButtonStyle>
  );
}

const ButtonStyle = styled.div`
  a:link,
  a:visited {
    text-transform: uppercase;
    padding: 1.5rem 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10rem;
    color: ${(props) => (props.color ? props.color : colors.primary)};
    background: ${(props) => (props.bgColor ? props.bgColor : "white")};
    font-size: 1.6rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    box-shadow: ${(props) => (props.noShadow ? "" : "0 10px 20px rgba(0, 0, 0, 0.2)")};
  }

  a:hover {
    color: ${(props) => (props.hover ? props.hover : colors.primary)};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
      background: ${(props) => (props.bgColor ? props.bgColor : "white")};
    }
  }

  a:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  a::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.4s;
  }
`;

export default MainButton;
