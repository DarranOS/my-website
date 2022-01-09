import React from "react";
import styled from "styled-components";

const Section = ({ title, desc, leftButtonText, rightButtonText, color, children }) => {
  return (
    <Wrap color={color}>
      <ItemText>
        <h1>{title}</h1>
        <p>{desc}</p>
        {children}
      </ItemText>
      <MainWrapper></MainWrapper>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButtonText}</LeftButton>
          {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
        </ButtonGroup>
        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  height: 100vh;

  background-color: ${(props) => `${props.color}`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  width: 35%;

  p {
    font-size: 1.4rem;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background: blue;
  height: 40px;
  width: 256px;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursur: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: red;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin: 0 auto;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainWrapper = styled.div``;
