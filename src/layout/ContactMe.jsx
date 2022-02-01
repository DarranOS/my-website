import React from 'react'
import styled from 'styled-components'
import SecondaryButton from '../components/SecondaryButton'
import colors from '../styles/Colors'
import IconGen from '../components/IconGen'
import ContactForm from './ContactForm'

const ContactMe = () => {
  return (
    <Container>
      <Heading>
        <h3>Get In Touch!</h3>
        <p>I'd love to hear from you.</p>
      </Heading>

      <Contact>
        <ContactIcons>
          <a href="tel:07456638412">
            <SecondaryButton
              text={'CALL  >'}
              color="white"
              background={colors.compBlue}
              flash={colors.compBlue}
              fullBorder
            >
              <IconGen icon="Phone" size="24px" color="white" />
            </SecondaryButton>
          </a>
          <a href="mailto:darranoshea@gmail.com">
            <SecondaryButton
              text={'EMAIL  >'}
              color="white"
              background={colors.compBlue}
              flash={colors.compBlue}
              fullBorder
            >
              <IconGen icon="Email" size="24px" color="white" />
            </SecondaryButton>
          </a>
        </ContactIcons>

        <ContactFormDiv>
          <ContactForm width={'100%'} />
        </ContactFormDiv>
      </Contact>
    </Container>
  )
}

export default ContactMe

const Container = styled.div`
  margin-top: 10vh;
  ${'' /* min-height: 70vh; */}
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 0vh 5vw;
  grid:
    'heading'
    'pic'
    'bio';

  @media (min-width: 992px) {
    display: grid;
    margin-top: 2vh;
    margin-bottom: 8vh;
    padding: 4vh 15vw 8vh 15vw;
    grid:
      'heading heading'
      'bio pic';
    grid-template-columns: 3fr 1.5fr;
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
      font-size: 4rem;
    }
  }
`

const Contact = styled.div`
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

  @media (min-width: 992px) {
    width: 100%;
  }
`

const ContactFormDiv = styled.div`
  @media (min-width: 992px) {
    max-width: 100%;
  }
`

const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-block: 2vh;

  @media (min-width: 922px) {
    max-width: 100%;
  }

  a {
    width: 48%;
  }
`
