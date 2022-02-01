import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SecondaryButton from '../components/SecondaryButton'
import colors from '../styles/Colors'

const AboutMe = () => {
  return (
    <Container>
      <Heading>
        <h3>A Little About Me</h3>
      </Heading>
      <ImageContainer>
        <img src="/images/darran-o-shea.jpg" alt="" />
      </ImageContainer>

      <TextContainer>
        <TextBox>
          <h4>A self-taught, Full-Stack developer</h4>

          <p>
            I'm Darran. I used to be the{' '}
            <em>
              <span>senior operations manager</span>
            </em>{' '}
            for a small chain of independent bars and restaurants.
          </p>
          <p>
            In addition to the dayjob, I built Wordpress sites as a fun{' '}
            <em>
              <span>hobby/side-hustle</span>
            </em>{' '}
            to indulge my passion for design.
          </p>
          <p>
            I always wanted to learn more, but the 60+ hours/week dayjob didn't leave a
            lot of time to study beyond HTML and CSS.
          </p>
        </TextBox>
        <TextBox>
          <h4>And then.....Lockdowns!</h4>
          <p>
            Instead of baking Banana Bread, I kept sane with Youtube Javascript tutorials.
            I came across The Odin Project, a free structured online course, and got
            addicted.
          </p>
          <p>
            While furloughed, I founded myself excitedly coding 10+ hours a day, and knew
            it was decision time! So.....
          </p>
          <p>
            <span>I took the plunge and left hospitality</span>
          </p>

          <p>
            It’s been an exhilarating year, but I'm feeling psyched to start my{' '}
            <em>
              <span> fullstack dev</span>
            </em>{' '}
            career.
          </p>
          <TextLink href="https://github.com/DarranOS">github.com/DarranOS</TextLink>
        </TextBox>
        <ButtonsContainer>
          <Link to="/projects">
            <SecondaryButton
              text={'Check out my Projects  >'}
              color="white"
              background={colors.compBlue}
              flash={colors.compBlue}
              fullBorder
            />
          </Link>
        </ButtonsContainer>
      </TextContainer>
    </Container>
  )
}

export default AboutMe

const Container = styled.div`
  margin-top: 10vh;
  min-height: 70vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 0vh 5vw;
  ${'' /* min-height: 100vh; */}
  grid:
    'heading'
    'pic'
    'bio';

  @media (min-width: 992px) {
    display: grid;
    margin-top: 0;
    padding: 10vh 15vw 0 15vw;
    grid:
      'heading heading'
      'bio pic';
    grid-template-columns: 3fr 1.5fr;
    grid-template-rows: 0.1fr 2fr;
    gap: 1vw;
  }
`

const Heading = styled.div`
  grid-area: heading;
  width: 100%;
  z-index: 10;

  @media (min-width: 1200px) {
  }

  h3 {
    background-image: linear-gradient(to right, #fec922, #fe9622);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: left;
    padding-right: 15%;

    @media (min-width: 1200px) {
      width: 100%;
      margin-bottom: 2vh;
      font-size: 3rem;
    }
  }
`

const ImageContainer = styled.div`
  margin-top: 8vh;
  margin-bottom: 12vh;
  overflow: hidden;
  margin-right: -10vw;
  place-self: center end;
  grid-area: pic;
  border-radius: 50%;
  outline-offset: 2rem;
  outline: 0.3rem solid ${colors.primary};
  transistion: all 0.2s;
  display: grid;
  justify-content: flex-end;
  transition: all 0.2s ease-in;

  img {
    width: 70vw;
    height: 70vw;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.6);

    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.1) rotate(3deg) translateY(-2rem) translateX(2rem);
    outline-offset: 1.5rem;
    outline: 0.3rem solid ${colors.secondary};
  }

  @media (min-width: 768px) {
    display: grid;
    place-self: start center;
    width: 40vw;
    height: 40vw;
    margin-top: 8vh;
    margin-right: 0;
    border-radius: 50%;

    img {
      place-self: center;
      overflow: hidden;
      width: 40vw;
      height: 40vw;
    }
  }
  @media (min-width: 1200px) {
    display: grid;
    place-self: start center;
    width: 20vw;
    height: 20vw;
    margin-top: 0;
    margin-right: 0;
    border-radius: 50%;

    img {
      place-self: center;
      overflow: hidden;
      width: 20vw;
      height: 20vw;
    }
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  grid-area: bio;
  height: min-contents;

  div:nth-child(2) {
    h4 {
      margin-top: 8vh;

      @media (min-width: 1200px) {
        margin-top: 4vh;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`
const TextBox = styled.div`
  h4 {
    color: ${colors.darkOrange};
    font-size: 1.8rem;
    margin-bottom: 1.5vh;
    background-image: linear-gradient(to right, #fec922, #fe9622);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

    ::selection {
      background: ${colors.compBlue};
      color: white;
      font-size: 1.9;
    }
  }

  span {
    font-weight: bold;

    ::selection {
      background: #ff8c00;
      color: yellow;
      font-size: 1.9;
    }
  }

  ::selection {
    background: #ff8c00;
    color: yellow;
    font-size: 1.9;
  }

  p {
    line-height: 2.8;
    margin-right: 3vw;
  }

  p:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 1200px) {
    p {
      line-height: 1.6;
      padding-right: 15%;
    }

    p:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
`

const TextLink = styled.a`
  background-image: linear-gradient(to right, #fea922, #fe9622);
  filter: drop-shadow(0 0px 1px rgba(0, 0, 0, 0.2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 1.8rem;
`

const ButtonsContainer = styled.a`
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
`
