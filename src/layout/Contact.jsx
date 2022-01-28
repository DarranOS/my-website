import React from 'react'
import styled from 'styled-components'
import ContactForm from './ContactForm'
import ClipPaths from '../styles/ClipPaths'
import Colors from '../styles/Colors'

const Contact = () => {
  return (
    <Container>
      <Background>
        <BackOverlay />

        <BgImgContainer>
          <img src="/images/hypnotic-brass-grey_1220.webp" alt="" />
        </BgImgContainer>
      </Background>

      <Heading>
        <h2> Get in Touch</h2>
      </Heading>
      <MainContainer>
        <ContactForm width={'500px'} />
      </MainContainer>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0vh 5vw;
  justify-content: center;
  align-items: center;

  @media (min-width: 667px) {
    padding: 0vh 15vw;
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 1;
  clip-path: ${ClipPaths.hero2};
`

const BackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 1;
  background: ${Colors.grLightOrange};
`

const BgImgContainer = styled.div`
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  mix-blend-mode: overlay;

  img {
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`

const Heading = styled.div`
  width: 100%;
  z-index: 10;

  
  @media (min-width: 667px) {
  place-self: center;
  }

  h2 {
 
    color: white;
    text-align: left;

    @media (min-width: 1200px) {
      text-align: center;
      padding-right: 0;
      width: 100%;
      font-size: 6rem;
      filter: drop-shadow(0 2px 3px rgba(0,0,0,.3))
  }
`

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
