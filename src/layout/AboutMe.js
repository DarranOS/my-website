import React from 'react'
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
          <h4>A self-taught Full-Stack developer</h4>

          <p>
            I'm Darran. I used to be the{' '}
            <em>
              <span>operations manager</span>
            </em>{' '}
            for a small chain of independent bars and restaurants. During that time, I
            also built simple Wordpress sites. It was a fun hobby/side-hustle but my
            dayjob didn't really leave time to learn much more than HTML and CSS.
          </p>
        </TextBox>
        <TextBox>
          <h4>And then.....Lockdown</h4>
          <p>
            While others learned to bake Banana Bread, I kept myself sane with Javascript
            tutorials on Youtube and got addicted.
          </p>
          <p>
            By April 2021, I was having to much fun that I decided to take the plunge and{' '}
            <em>
              <span>change careers</span>
            </em>
            {'. '} I've spent almost every moment since learning modern Javascript
            development.
          </p>

          <p>
            It’s been an exhilarating ride so far, and I'm eager to begin my career as a
            professional fullstack developer. If you think I could be an asset to your
            team, get in contact.
          </p>
        </TextBox>
        <ButtonsContainer>
          <SecondaryButton text={'My Github  >'} color={colors.primary} />
          <SecondaryButton text={'More on the Odin Project  >'} color={colors.primary} />
        </ButtonsContainer>
      </TextContainer>
    </Container>
  )
}

export default AboutMe

const Container = styled.div`
  min-height: 70vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 0vh 5vw;
  min-height: 100vh;
  grid:
    'heading'
    'pic'
    'bio';

  @media (min-width: 667px) {
    display: grid;
    padding: 0vh 15vw;
    grid:
      'heading heading'
      'bio pic';
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 2fr;
    gap: 4vw;
  }
`

const Heading = styled.div`
  grid-area: heading;
  width: 100%;
  z-index: 10;
  
  @media (min-width: 667px) {
  place-self: center;
  }

  h3 {
    background-image: linear-gradient(to right, #fec922, #fe9622);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: left;
    padding-right: 20%;

    @media (min-width: 768px) {
      text-align: center;
      padding-right: 0;
      width: 100%;
  }
`

const ImageContainer = styled.div`
  margin-top: 12vh;
  margin-bottom: 18vh;
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

  @media (min-width: 667px) {
    display: grid;
    place-self: center;
    width: 25vw;
    height: 25vw;
    margin-top: 0;
    margin-right: 0;

    img {
      place-self: center;
      overflow: hidden;
      width: 25vw;
      height: 25vw;
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
      margin-top: 10vh;
    }
  }

  @media@media (min-width: 667px) {
    width: 100%;
    padding-right: 5vw;
  }
`
const TextBox = styled.div`
  h4 {
    color: ${colors.darkOrange};
    font-size: 1.8rem;
    margin-bottom: 1.5vh;
  }

  span {
    font-size: 1.8rem;
    font-weight: bold;
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
`

const ButtonsContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
`
