import React from "react";
import styled from "styled-components";
import SecondaryButton from "../components/SecondaryButton";
import colors from "../styles/Colors";

function AboutMe() {
  return (
    <Container>
      <TextContainer>
        <h4>I'm a self-taught Full-Stack developer</h4>

        <p>
          I was in hospitality management until recently. As    a hobby) I
          built simple Wordpress sites for a few paying clients, learning a little HTML
          and CSS along the way.
        </p>
        <h4>Then the Lockdowns happened...</h4>
        <p>
          While others were learning to bake Banana Bread, I kept myself sane and
          entertained with Javascript tutorials on Youtube. I found a passion that I
          didn't know I had.
        </p>
        <p>
          By April 2021, I decided to change careers, spending almost every moment since
          learning modern Javascript development using The Odin Project structured course.
        </p>

        <p>
          It’s been an exhilarating learning process so far. If you have a few minutes to
          spare, please check out my Github account.
        </p>
        <ButtonsContainer>
          <SecondaryButton text={"My Github  >"} color={colors.primary} />
          <SecondaryButton text={"More on the Odin Project  >"} color={colors.primary} />
        </ButtonsContainer>
      </TextContainer>
      <ImageContainer>
        <ImageSubContainer>
          <img src="/images/darran-o-shea.jpg" alt="" />
        </ImageSubContainer>
      </ImageContainer>
    </Container>
  );
}

export default AboutMe;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  width: 70%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    color: ${colors.darkOrange};
    font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2rem;

  img {
    width: 20vw;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.6);
    display: inline-block;

    transition: all 0.2s ease-in;
    border-radius: 5px;
    &:hover {
      transform: scale(1.1) rotate(3deg) translateY(-2rem) translateX(2rem);
      outline-offset: 1.5rem;
      outline: 0.5rem solid ${colors.secondary};
    }
  }
`;

const ImageSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transistion: all 0.2s;
  outline-offset: 2rem;
  outline: 0.6rem solid ${colors.primary};
  border-radius: 5px;
`;
