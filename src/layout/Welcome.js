import styled from 'styled-components'
import Animations from '../styles/Animations'
import colors from '../styles/Colors'
import ClipPaths from '../styles/ClipPaths'
import gradient from '../styles/gradients'

const Welcome = () => {
  return (
    <Wrap zIndex={10}>
      <Background clip={ClipPaths.hero}>
        <BackOverlay
          opacity={0.9}
          color={gradient(
            'linear',
            `${colors.primary}`,
            `${colors.secondary}`,
            '60',
            '80'
          )}
        ></BackOverlay>
        <BgImgContainer opacity={0.8} mixMode="multiply">
          <img src="/images/lucky2.jpg" alt="" />
        </BgImgContainer>
      </Background>

      <CentralDiv>
        <Header>
          <HeadingContainer1>
            <h1>Darran</h1>
          </HeadingContainer1>

          <HeadingContainer2>O'Shea</HeadingContainer2>

          <HeadingContainer3>WebDesign/Fullstack</HeadingContainer3>
        </Header>
      </CentralDiv>
    </Wrap>
  )
}

export default Welcome

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: ${(props) => props.zIndex};
  border: 2px dashed indigo;
  overflow: hidden;

  :not(:first-child) {
    margin-top: 15rem;
  }

  :not(:last-child) {
    margin-bottom: 15rem;
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  clip-path: ${(props) => props.clip};
`

const BackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: ${(props) => props.opacity};
  background: ${(props) => props.color};
`

const BgImgContainer = styled.div`
  opacity: ${(props) => props.opacity};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  mix-blend-mode: ${(props) => props.mixMode};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CentralDiv = styled.div`
  width: 100%;
  border: 4px solid blue;
  padding: 0;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibilty: hidden;
  z-index: 20;

  p {
    color: ${(props) => props.color};
  }
`

const HeadingContainer1 = styled.div`
  color: ${(props) => props.color};

  h1 {
    position: relative;
    animation: 0.5s ${Animations.fadeInRight} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.2s;
  }
`

const HeadingContainer2 = styled.div`
  color: ${(props) => props.color};

  h2 {
    color: ${(props) => props.color};
    position: relative;
    animation: 0.5s ${Animations.fadeInLeft} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.4s;
  }
`

const HeadingContainer3 = styled.div`
  color: ${(props) => props.color};
  width: 100%;
  text-align: center;
`

// {<Section
//   heading1={[['Darran', "O'Shea"], `${colors.white}`]}
//   heading2={[['FullStack', 'WebDesign', 'Graphics'], `${colors.white}`]}
//   color={colors.primary}
//   leftButton={[
//     '#',
//     'Check out my work',
//     `${colors.primary}`,
//     `${colors.secondary}`,
//     'noShadow',
//   ]}
