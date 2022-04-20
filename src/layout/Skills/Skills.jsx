import styled from 'styled-components'
import { IconGen } from 'components'
import { colors } from 'styles'

const Skills = () => {
  return (
    <Container>
      <InnerContainer>
        <Heading>
          <h3>I Can Do...</h3>
          <p>
            Here's some of the tools, applications and frameworks that I've been working
            with.
          </p>
        </Heading>
        <TextGrid>
          <TextContainer>
            <TextTitle>
              My <span>usual workflow</span> looks like...
            </TextTitle>
            <TextBoxes>
              <TextBox>
                <IconGen icon="Visual Studio" size="24px" color={colors.primary} />
                <p>VS Code</p>
              </TextBox>
              <TextBox>
                <IconGen icon="NPM" size="24px" color={colors.primary} />
                <p>NPM</p>
              </TextBox>
              <TextBox>
                <IconGen icon="Javascript" size="24px" color={colors.primary} />
                <p>Javascript ES6</p>
              </TextBox>

              <TextBox>
                <IconGen icon="Sass" size="24px" color={colors.primary} />
                <p>SASS</p>
              </TextBox>
            </TextBoxes>
          </TextContainer>

          <TextContainer>
            <TextTitle>
              I'm happy <span>FrontEnd...</span>
            </TextTitle>
            <TextBoxes>
              <TextBox>
                <IconGen icon="HTML" size="24px" color={colors.primary} />
                <p>HTML5</p>
              </TextBox>
              <TextBox>
                <IconGen icon="CSS" size="24px" color={colors.primary} />
                <p>CSS3</p>
              </TextBox>
              <TextBox>
                <IconGen icon="Typescript" size="24px" color={colors.primary} />
                <p>Typescript</p>
              </TextBox>
              <TextBox>
                <IconGen icon="React" size="24px" color={colors.primary} />
                <p>React</p>
              </TextBox>
              <TextBox>
                <IconGen icon="Vue" size="24px" color={colors.primary} />
                <p>Vue</p>
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
                <IconGen icon="Photoshop" size="24px" color={colors.primary} />
                <p>Adobe Photoshop</p>
              </TextBox>
              <TextBox>
                <IconGen icon="Material Ui" size="24px" color={colors.primary} />
                <p>Material UI</p>
              </TextBox>

              <TextBox>
                <IconGen icon="Figma" size="24px" color={colors.primary} />
                <p>Figma</p>
              </TextBox>

              <TextBox>
                <IconGen icon="Styled Components" size="24px" color={colors.primary} />
                <p>Styled Components</p>
              </TextBox>

              <TextBox>
                <IconGen icon="Elementor" size="24px" color={colors.primary} />
                <p>Elementor</p>
              </TextBox>
            </TextBoxes>
          </TextContainer>

          <TextContainer>
            <TextTitle>
              And a little <span>Backend...</span>
            </TextTitle>
            <TextBoxes>
              <TextBox>
                <IconGen icon="Node JS" size="24px" color={colors.primary} />
                <p>Node JS</p>
              </TextBox>
              <TextBox>
                <IconGen icon="Next.js" size="24px" color={colors.primary} />
                <p>Next.js</p>
              </TextBox>

              <TextBox>
                <IconGen icon="Wordpress" size="24px" color={colors.primary} />
                <p>Wordpress</p>
              </TextBox>

              <TextBox>
                <IconGen icon="Firebase" size="24px" color={colors.primary} />
                <p>Firebase</p>
              </TextBox>
              <TextBox>
                <IconGen icon="Express" size="24px" color={colors.primary} />
                <p>Express.js</p>
              </TextBox>
              <TextBox>
                <IconGen icon="JSON" size="24px" color={colors.primary} />
                <p>JSON Server</p>
              </TextBox>

              <TextBox>
                <IconGen icon="Visual Studio" size="24px" color={colors.primary} />
                <p>REST APIs</p>
              </TextBox>
              <TextBox>
                <IconGen icon="Database Outline" size="24px" color={colors.primary} />
                <p>SQL Databases</p>
              </TextBox>
              <TextBox>
                <IconGen icon="Jest" size="24px" color={colors.primary} />
                <p>Jest</p>
              </TextBox>

              <TextBox>
                <IconGen icon="Git" size="24px" color={colors.primary} />
                <p>Git</p>
              </TextBox>
            </TextBoxes>
          </TextContainer>
        </TextGrid>
      </InnerContainer>
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

  @media (min-width: 992px) {
    min-height: 0;
    margin-top: 0vh;
    padding: 0vh 15vw;
    padding-top: 12vh;
    padding-bottom: 12vh;
    align-items: center;
    justify-content: center;
  }
`

const InnerContainer = styled.div`
  @media (min-width: 1300px) {
    width: 1200px;
  }
`

const Heading = styled.div`
  grid-area: heading;
  width: 100%;
  z-index: 100;

  @media (min-width: 992px) {
    margin-bottom: 3vh;
    width: 70%;
  }

  h3 {
    background-image: linear-gradient(to right, #fec922, #fe9622);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 4rem;
    text-align: left;
    color: transparent;

    @media (min-width: 992px) {
      padding-right: 0;
      width: 100%;
    }
  }
`

const TextTitle = styled.h5``

const TextGrid = styled.div`
  @media (min-width: 992px) {
    display: grid;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  h5 {
    margin-top: 6vh;
    margin-bottom: 2vh;
    letter-spacing: 0.2rem;
    line-height: 2;
    font-weight: 100;
    color: #393c41;

    span {
      font-size: 110%;
      border-bottom: 1 solid ${colors.primary};
      font-weight: 700;
      background-image: linear-gradient(to right, #fec922, #fe9622);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    @media (min-width: 992px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  > div > p {
    line-height: 1.6;
  }

  :not(:last-child) {
    @media (min-width: 992px) {
      margin-bottom: 4vh;
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
  ${'' /* padding-right: 10%; */}
  @media (min-width: 768px) {
    width: 33%;
    margin: 1.5vh 0;
  }
  @media (min-width: 992px) {
    width: 25%;
    margin: 1.2vh 0;
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
    margin-left: 1rem;
    letter-spacing: 0.08rem;

    @media (min-width: 992px) {
      margin-left: 1.6rem;
    }
  }
`
