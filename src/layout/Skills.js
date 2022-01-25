import React from 'react'
import styled from 'styled-components'
import IconGen from '../components/IconGen'
import colors from '../styles/Colors'

const Skills = () => {
  return (
    <Container>
      <Heading>
        <h3>What I'm Doing?</h3>
      </Heading>

      <TextContainer>
        <h4>My typical workflow looks like..</h4>

        <TextBox>
          <IconGen icon="Visual Studio" size="24px" color={colors.primary} />
          <p>Visual Studio Code</p>
        </TextBox>
        <TextBox>
          <IconGen icon="NPM" size="24px" color={colors.primary} />
          <p>NPM</p>
        </TextBox>
        <TextBox>
          <IconGen icon="HTML" size="24px" color={colors.primary} />
          <p>HTML5</p>
        </TextBox>
        <TextBox>
          <IconGen icon="CSS" size="24px" color={colors.primary} />
          <p>CSS3</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Javascript" size="24px" color={colors.primary} />
          <p>Javascript ES6</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Typescript" size="24px" color={colors.primary} />
          <p>Typescript</p>
        </TextBox>
        <TextBox>
          <IconGen icon="React" size="24px" color={colors.primary} />
          <p>React & React Hooks</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Github" size="24px" color={colors.primary} />
          <p>Github</p>
        </TextBox>
        <TextBox>
          <IconGen icon="JSON" size="24px" color={colors.primary} />
          <p>JSON Server</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Postman" size="24px" color={colors.primary} />
          <p>Postman</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Visual Studio" size="24px" color={colors.primary} />
          <p>Axios</p>
        </TextBox>

        <TextBox>
          <IconGen icon="Styled Components" size="24px" color={colors.primary} />
          <p>Styled Components</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Database Outline" size="24px" color={colors.primary} />
          <p>SQL</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Photoshop" size="24px" color={colors.primary} />
          <p>Photoshop</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Firebase" size="24px" color={colors.primary} />
          <p>Firebase</p>
        </TextBox>

        <TextBox>
          <IconGen icon="Visual Studio" size="24px" color={colors.primary} />
          <p>REST APIs</p>
        </TextBox>
      </TextContainer>

      <TextContainer>
        <h4>But I've also worked a bit with...</h4>
        <TextBox>
          <IconGen icon="Sass" size="24px" color={colors.primary} />
          <p>SASS</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Ubuntu" size="24px" color={colors.primary} />
          <p>Ubuntu CLI</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Git" size="24px" color={colors.primary} />
          <p>Git</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Google Cloud Platform" size="24px" color={colors.primary} />
          <p>Google Cloud Platform</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Bootstrap" size="24px" color={colors.primary} />
          <p>Bootstrap</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Tailwind CSS" size="24px" color={colors.primary} />
          <p>Tailwind CSS</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Vue" size="24px" color={colors.primary} />
          <p>Vue</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Material Ui" size="24px" color={colors.primary} />
          <p>Material UI</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Illustrator" size="24px" color={colors.primary} />
          <p>Adobe Illustrator</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Figma" size="24px" color={colors.primary} />
          <p>Figma</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Next JS" size="24px" color={colors.primary} />
          <p>Next JS</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Node JS" size="24px" color={colors.primary} />
          <p>Node JS</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Jest" size="24px" color={colors.primary} />
          <p>Jest</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Database" size="24px" color={colors.primary} />
          <p>NonSQL Databases</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Webpack" size="24px" color={colors.primary} />
          <p>Webpack</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Framer" size="24px" color={colors.primary} />
          <p>Framer Motion</p>
        </TextBox>
      </TextContainer>

      <TextContainer>
        <h4>And googled my way through....</h4>
        <TextBox>
          <IconGen icon="Express" size="24px" color={colors.primary} />
          <p>Express.js</p>
        </TextBox>
        <TextBox>
          <IconGen icon="Babel" size="24px" color={colors.primary} />
          <p>Babel</p>
        </TextBox>
      </TextContainer>
    </Container>
  )
}

export default Skills

const Container = styled.div`
  margin-top: 15vh;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 0vh 5vw;
  min-height: 100vh;

  @media (min-width: 667px) {
    display: grid;
    padding: 0vh 15vw;

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
    font-size: 4.2vh;

    @media (min-width: 768px) {
      text-align: center;
      padding-right: 0;
      width: 100%;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  height: min-contents;

  h4 {
    padding-top: 5vh;
    color: ${colors.darkOrange};
    font-size: 1.8rem;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }

  div:nth-child(2) {
    h4 {
    }
  }

  @media@media (min-width: 667px) {
    width: 100%;
    padding-right: 5vw;
  }
`

const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 1.5vh 0;

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
    margin-left: 3vw;
  }
`
