import React from 'react'
import styled from 'styled-components'
import IconGen from '../components/IconGen'
import ContactForm from './ContactForm'
import colors from '../styles/Colors'

const Skills = () => {
  return (
    <Container>
      <Heading>
        <h3>I Can Do...</h3>
        <p>
          Here's some of the tools, applications and frameworks that I've been playing
          with for the past year, at various levels of fluency.
        </p>
        <p>Terms and conditions apply.</p>
      </Heading>
      <TextGrid>
        <TextContainer>
          <TextTitle>
            <h4>
              My <span>usual workflow</span> looks like...
            </h4>
          </TextTitle>
          <TextBoxes>
            <TextBox>
              <IconGen icon="Visual Studio" size="24px" color="white" />
              <p>VS Code</p>
            </TextBox>
            <TextBox>
              <IconGen icon="NPM" size="24px" color="white" />
              <p>NPM</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Javascript" size="24px" color="white" />
              <p>Javascript ES6</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Styled Components" size="24px" color="white" />
              <p>Styled Components</p>
            </TextBox>
          </TextBoxes>
        </TextContainer>

        <TextContainer>
          <TextTitle>
            <h4>
              I'm happy <span>FrontEnd...</span>
            </h4>
          </TextTitle>
          <TextBoxes>
            <TextBox>
              <IconGen icon="HTML" size="24px" color="white" />
              <p>HTML5</p>
            </TextBox>
            <TextBox>
              <IconGen icon="CSS" size="24px" color="white" />
              <p>CSS3</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Typescript" size="24px" color="white" />
              <p>Typescript</p>
            </TextBox>
            <TextBox>
              <IconGen icon="React" size="24px" color="white" />
              <p>React</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Vue" size="24px" color="white" />
              <p>Vue</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Bootstrap" size="24px" color="white" />
              <p>Bootstrap</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Tailwind CSS" size="24px" color="white" />
              <p>Tailwind CSS</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Material Ui" size="24px" color="white" />
              <p>Material UI</p>
            </TextBox>

            <TextBox>
              <IconGen icon="Photoshop" size="24px" color="white" />
              <p>Adobe Photoshop</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Figma" size="24px" color="white" />
              <p>Figma</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Sass" size="24px" color="white" />
              <p>SASS</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Elementor" size="24px" color="white" />
              <p>Elementor</p>
            </TextBox>
          </TextBoxes>
        </TextContainer>

        <TextContainer>
          <TextTitle>
            <h4>
              And a little <span>Backend...</span>
            </h4>
          </TextTitle>
          <TextBoxes>
            <TextBox>
              <IconGen icon="Node JS" size="24px" color="white" />
              <p>Node JS</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Next JS" size="24px" color="white" />
              <p>Next JS</p>
            </TextBox>

            <TextBox>
              <IconGen icon="Wordpress" size="24px" color="white" />
              <p>Wordpress</p>
            </TextBox>

            <TextBox>
              <IconGen icon="Firebase" size="24px" color="white" />
              <p>Firebase</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Express" size="24px" color="white" />
              <p>Express.js</p>
            </TextBox>
            <TextBox>
              <IconGen icon="JSON" size="24px" color="white" />
              <p>JSON Server</p>
            </TextBox>

            <TextBox>
              <IconGen icon="Database Outline" size="24px" color="white" />
              <p>SQL Databases</p>
            </TextBox>

            <TextBox>
              <IconGen icon="Visual Studio" size="24px" color="white" />
              <p>REST APIs</p>
            </TextBox>
            <TextBox>
              <IconGen icon="Jest" size="24px" color="white" />
              <p>Jest</p>
            </TextBox>

            <TextBox>
              <IconGen icon="Git" size="24px" color="white" />
              <p>Git</p>
            </TextBox>
          </TextBoxes>
        </TextContainer>
      </TextGrid>

      <Contact>
        <h3>Get In Touch!</h3>
        <p>I'd love to hear from you.</p>
        <ContactIcons>
          <a href="tel:07456638412">
            <ContactIcon>
              <IconHolder>
                <IconGen icon="Phone" size="36px" color="white" />
              </IconHolder>
              <div>
                <p>Call</p>
              </div>
            </ContactIcon>
          </a>
          <a href="mailto:darranoshea@gmail.com">
            <ContactIcon>
              <IconHolder>
                <IconGen icon="Email" size="36px" color="white" />
              </IconHolder>
              <div>
                <p>Email</p>
              </div>
            </ContactIcon>
          </a>
        </ContactIcons>

        <ContactFormDiv>
          <ContactForm width={'100%'} />
        </ContactFormDiv>
      </Contact>
    </Container>
  )
}

export default Skills

const Container = styled.div`
  margin-top: 5vh;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  padding: 15vh 5vw;
  min-height: 100vh;
  background-image: linear-gradient(220.55deg, #ffc328 0%, #e25500 100%);
  clip-path: polygon(0 3%, 100% 0%, 100% 100%, 0% 100%);

  @media (min-width: 1200px) {
    margin-top: 0vh;
    display: flex;
    flex-direction: column;
    padding: 0vh 15vw;
    clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
    padding-top: 20vh;
  }
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 100;
  margin-top: 8vh;
  margin-bottom: 6vh;
  color: white;

  @media (min-width: 992px) {
    margin-top: 0vh;
    margin-bottom: 0vh;
    align-items: flex-start;
  }

  h3 {
    font-size: 4rem;

    @media (min-width: 1200px) {
      margin-bottom: 4vh;
    }
  }

  div {
    width: 100%;

    @media (min-width: 992px) {
      ${'' /* width: 70%; */}
    }
  }

  p {
    font-size: 2rem;
    margin: 0;
    padding: 0;
    line-height: 2;

    a {
      background: ${colors.compBlue};
      color: white;
    }
  }
`

const Heading = styled.div`
  grid-area: heading;
  width: 100%;
  z-index: 100;

  @media (min-width: 1200px) {
    margin-bottom: 4vh;
    margin-top: 12vh;
  }

  h3 {
    font-size: 4rem;
    color: white;
    text-align: left;

    @media (min-width: 1200px) {
      padding-right: 0;
      width: 100%;
    }
  }

  p {
    color: white;
    line-height: 1.6;

    :not(:last-child) {
      margin-bottom: 2vh;
    }
  }
`

const TextTitle = styled.div`
  @media (min-width: 1200px) {
  }
`

const TextGrid = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    margin-bottom: 10vh;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  h4 {
    color: white;
    font-size: 1.6rem;
    margin-top: 6vh;
    margin-bottom: 2vh;
    padding: 0.2rem 0.4rem;
    letter-spacing: 0.2rem;
    line-height: 2;

    span {
      font-weight: 700;
      font-size: 2rem;
      background: ${colors.compBlue2Fade};
      line-height: 1.2;
      border-bottom: 2px solid ${colors.white};
    }

    ::after {
      background: black;
      content: ' ';
    }

    @media (min-width: 1200px) {
      color: white;
      font-size: 1.6rem;
      padding: 0.2rem 0.4rem;
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  > div > p {
    line-height: 1.6;
  }

  :not(:last-child) {
    @media (min-width: 1200px) {
      margin-bottom: 5vh;
    }
  }
`

const TextBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 3vh 0;
  padding-right: 10%;

  @media (min-width: 768px) {
    width: 33%;
    margin: 1.5vh 0;
  }
  @media (min-width: 1200px) {
    width: 25%;
    margin: 1.5vh 0;
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
    line-height: 1.2;
    margin-left: 4vw;
    color: white;

    @media (min-width: 1200px) {
      margin-left: 0.5vw;
    }
  }
`

const ContactFormDiv = styled.div`
  @media (min-width: 992px) {
    max-width: 70%;
  }
`

const ContactIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4vh;
  margin-top: 4vh;
  width: 100%;

  @media (min-width: 922px) {
    max-width: 35%;
  }

  a {
    width: 46%;
  }
`

const ContactIcon = styled.div`
  background: ${colors.compBlue};
  color: white;
  border-radius: 8px;
  margin: 1vh 0;
  display: flex;
  padding: 1rem 1rem;
  align-items: center;
  justify-content: center;
  border: 2px solid white;

  div {
  }

  p {
    margin-left: 1rem;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    font-family: 'BasementGrotesque';
    text-transform: uppercase;
  }
`

const IconHolder = styled.div`
  max-width: 36px;
`
