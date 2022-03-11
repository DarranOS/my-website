import styled from 'styled-components'
import IconGen from '../../components/IconGen'
import colors from '../../styles/Colors'
import ContactForm from '../../components/ContactForm'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <Container>
      <InnerContainer>
        <h3>Let's talk!</h3>
        <TopRow>
          <TextContainer>
            <TextBoxes>
              <TextBox>
                <IconBox href="tel:+47456638412">
                  <IconGen icon="Phone" size="24px" color="white" />
                  <p>Phone</p>
                </IconBox>
                <IconBoxRight href="tel:+47456638412">
                  <p>07456638412</p>
                </IconBoxRight>
              </TextBox>

              <TextBox>
                <IconBox href="mailto:darranoshea@gmail.com">
                  <IconGen icon="Email" size="24px" color="white" />
                  <p>Email</p>
                </IconBox>
                <IconBoxRight href="mailto:darranoshea@gmail.com">
                  <p>darranoshea@gmail.com</p>
                </IconBoxRight>
              </TextBox>

              <TextBox>
                <IconBox href="https://www.linkedin.com/in/darran-o-shea-335763229/">
                  <IconGen icon="Linkedin" size="24px" color="white" />
                  <p>LinkedIn</p>
                </IconBox>
              </TextBox>
              <TextBox>
                <IconBox href="https://www.facebook.com/darran.oshea/">
                  <IconGen icon="Facebook" size="24px" color="white" />
                  <p>Facebook</p>
                </IconBox>
              </TextBox>
              <TextBox>
                <IconBox href="https://github.com/DarranOS">
                  <IconGen icon="Github" size="24px" color="white" />

                  <p>Github</p>
                </IconBox>
              </TextBox>
            </TextBoxes>
          </TextContainer>
          <FormContainer>
            <ContactForm width={'100%'} />
          </FormContainer>
        </TopRow>
        <BottomRow>
          <BottomLeft>
            <p>
              Designed by Darran O'Shea at <span>darranoshea.co.uk</span>
            </p>
          </BottomLeft>
          <BottomRight>
            <p>All Rights Reserved © {date}</p>
          </BottomRight>
        </BottomRow>
      </InnerContainer>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  padding-top: 15vh;
  padding-inline: 5vw;
  background-image: linear-gradient(220.55deg, #ffc328 0%, #e25500 100%);
  clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0% 100%);

  @media (min-width: 992px) {
    margin-top: 0vh;
    display: flex;
    flex-direction: column;
    clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
    padding-top: 8vh;
    padding-bottom: 2vh;
    align-items: center;
  }
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 992px) {
    width: min(800px, 80vw);
    margin-bottom: 1vh;
    padding-top: 12vh;
  }

  @media (min-width: 1300px) {
    width: min(1200px, 80vw);
  }

  h3 {
    color: white;
    margin-top: 0;
    letter-spacing: 0.2rem;
    line-height: 1;
    display: inline;
    margin-bottom: 1vh;
    padding: 0;
  }

  p {
    line-height: 1.2;
    color: white;
    transition: all 0.4s;

    span {
      color: ${colors.brightOrange};
      font-weight: 500;
    }
  }

  svg {
    transition: all 10s;
  }
`

const TopRow = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 992px) {
    flex-direction: row;
    margin-top: 2vh;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    width: 50%;
  }
`
const FormContainer = styled.div`
  margin-top: 3vh;
  width: 100%;

  @media (min-width: 992px) {
    margin-top: 0;
    width: 50%;
  }
`

const TextBoxes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 6vh;

  @media (min-width: 992px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 0;
  }
`

const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-block: 3vh;

  @media (min-width: 768px) {
    width: 33%;
  }
  @media (min-width: 992px) {
    display: flex;
    margin-block: 1vh;
    padding-right: 0;
    width: 100%;
    height: 3vh;
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
`

const IconBox = styled.a`
  display: flex;
  align-items: center;
  width: 50%;
  height: 3vh;

  p {
    margin-left: 1rem;
  }

  width: 50%;

  :hover * {
    color: ${colors.brightOrange};
  }
`

const IconBoxRight = styled(IconBox)`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    p {
      color: ${colors.brightOrange};
      font-weight: bold;
      margin-left: 0;

      :hover {
        color: ${colors.secondary};
      }
    }
  }
`

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid ${colors.white};
  padding-top: 3vh;

  @media (min-width: 992px) {
    padding-top: 1vh;
    flex-direction: row;
  }
`
const BottomLeft = styled.div``
const BottomRight = styled.div`
  padding-block: 2vh;

  @media (min-width: 992px) {
    padding-block: 0;
  }
`
