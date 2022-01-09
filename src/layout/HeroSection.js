import React from "react";
import styled from "styled-components";
import Animations from "../styles/Animations";
import colors from "../styles/Colors";
import { ArrowDown } from "../components/svgs/svgs";
import Button from "../components/Button";

const HeroSection = ({
  title,
  desc,
  leftButtonText,
  rightButtonText,
  color,
  children,
  bgImg,
  sub,
}) => {
  return (
    <Wrap>
      <Background>
        <img src={bgImg} alt="" />
      </Background>
      {/* <LogoDiv>
        <a>
          <img alt="logo" src="/images/damn-squid-logo.png" style={{ width: "36px" }} />
        </a>
      </LogoDiv> */}
      <CentralDiv>
        <ItemText>
          <h1>{title}</h1>
          {sub && <h2>{sub}</h2>}
          {desc && <p>{desc}</p>}
        </ItemText>

        <Buttons>
          <ButtonGroup>
            <Button text={leftButtonText} color={"orange"} bgColor={"white"} />
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
        </Buttons>
      </CentralDiv>
      <ArrowContainer>
        <ArrowProxy color={color} />
      </ArrowContainer>
    </Wrap>
  );
};

export default HeroSection;

const Wrap = styled.div`
  height: 95vh;
  background-image: url(../components/VanGogh3.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 1;

  background-color: ${colors.secondary};
  clip-path: polygon(0 0, 100% 0, 100% 83%, 0 100%);

  img {
    opacity: 0.3;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LogoDiv = styled.div`
  position: absolute;
  padding: 5% 5%;
  top: 0;
  left: 0;
  right: 0;
`;

const CentralDiv = styled.div``;

const ItemText = styled.div`
  width: 55vw;
  min-width: 55vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  backface-visibilty: hidden;

  h1 {
    position: relative;
    animation: 0.5s ${Animations.fadeInRight} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
  }

  h2 {
    position: relative;
    animation: 0.5s ${Animations.fadeInLeft} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.4s;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  animation: 0.5s ${Animations.moveUpBottom} ease-in-out;
  animation-iteration-count: 1;
  webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  animation-delay: 0.75s;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightButton = styled(Button)`
  background: red;
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

const ArrowProxy = styled(ArrowDown)`
  height: 50px;
  width: auto;
  animation: 1s ${Animations.animateDown} infinite 1.5s;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
