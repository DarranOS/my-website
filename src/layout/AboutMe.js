import React from 'react'
import styled from 'styled-components'
import SecondaryButton from '../components/SecondaryButton'
import colors from '../styles/Colors'

const AboutMe = () => {
  return (
    <Container>
      <Heading>
        <h3> A Little About Me</h3>
      </Heading>
      <ImageContainer>
        <img src="/images/darran-o-shea.jpg" alt="" />
      </ImageContainer>

      <TextContainer>
        <TextBox>
          <h4>A self-taught Full-Stack developer</h4>

          <p>
            I was in hospitality management until recently. During that time (as a hobby)
            I also built simple Wordpress sites for a few paying clients, learning a
            little HTML and CSS along the way.
          </p>
        </TextBox>
        <TextBox>
          <h4>Then the Lockdowns happened...</h4>
          <p>
            While others were learning to bake Banana Bread, I kept myself sane and
            entertained with Javascript tutorials on Youtube. I found a passion that I
            didn't know I had.
          </p>
          <p>
            By April 2021, I decided to change careers, spending almost every moment since
            learning modern Javascript development using The Odin Project structured
            course.
          </p>

          <p>
            It’s been an exhilarating learning process so far. If you have a few minutes
            to spare, please check out my Github account.
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
  min-height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 5vh 5vw;
  min-height: 100vh;
  grid:
    'heading'
    'pic'
    'bio';

  @media (min-width: 667px) {
    display: grid;
    padding: 15vh 15vw;
    grid:
      'heading heading'
      'bio pic';
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 2fr;
    gap: 2vw;
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
    padding-right: 30%;

    @media (min-width: 768px) {
      text-align: center;
      padding-right: 0;
      width: 100%;
  }
`

const ImageContainer = styled.div`
  margin-top: -16vh;
  margin-right: -10vw;
  place-self: center end;
  grid-area: pic;
  border-radius: 50%;
  outline-offset: 2rem;
  outline: 0.3rem solid ${colors.primary};
  transistion: all 0.2s;
  border: 2px solid hotpink;
  display: grid;
  justify-content: flex-end;

  img {
    width: 70vw;
    height: 70vw;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-in;
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
    width: 100%;
    margin-top: 0;
    margin-right: 0;

    img {
      place-self: center;
      overflow: hidden;
      width: 30vw;
      height: 30vw;
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

  @media@media (min-width: 667px) {
    width: 100%;
  }
`
const TextBox = styled.div`
  h4 {
    color: ${colors.darkOrange};
    font-size: 1.8rem;
    margin-bottom: 1vh;
  }

  p {
    line-height: 2;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
