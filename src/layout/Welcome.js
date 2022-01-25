import styled from 'styled-components'
import Animations from '../styles/Animations'
import colors from '../styles/Colors'
import ClipPaths from '../styles/ClipPaths'
import gradient from '../styles/gradients'

const Welcome = () => {
  return (
    <Wrap zIndex={1000}>
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
        <div>
          <HeadingContainer1>
            <h1>Darran</h1>
          </HeadingContainer1>

          <HeadingContainer2>
            <h1>O'Shea</h1>
          </HeadingContainer2>
        </div>
        <div>
          <HeadingContainer3>
            <h2>Nerd</h2>
            <h2>Fullstack Dev</h2>
            <h2>Designer</h2>
          </HeadingContainer3>
        </div>
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
  bottom: 0px;
  right: -900px;
  mix-blend-mode: ${(props) => props.mixMode};

  @media (min-width: 668px) {
    right: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const CentralDiv = styled.div`
  height: 100vh;
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 668px) {
    justify-content: center;
  }
`

const HeadingContainer1 = styled.div`
  color: white;
  display: flex;

  @media (min-width: 668px) {
    justify-content: center;
  }

  h1 {
    font-size: 16.5vw;
    line-height: 1.2;
    position: relative;
    animation: 0.5s ${Animations.fadeInRight} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.2s;
  }
`

const HeadingContainer2 = styled.div`
  color: white;
  margin-bottom: 2vh;

  @media (min-width: 668px) {
    justify-content: center;
  }

  h1 {
    font-size: 18.5vw;

    line-height: 0.7;
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
  display: flex;
  flex-direction: column;

  @media (min-width: 667px) {
    justify-content: center;
    flex-direction: row;
    margin-bottom: 0;
  }

  h2 {
    font-size: 8vw;
    line-height: 1.4;
    width: max-content;
    color: ${colors.compBlue2};
    animation: 0.5s ${Animations.moveUpBottom} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.6s;

    @media (min-width: 667px) {
      font-size: 5.3vw;
    }
  }

  h2:nth-child(2) {
    color: white;
    background: ${colors.compBlue2Fade};
    animation-delay: 0.8s;
  }
  h2:nth-child(3) {
    animation-delay: 1s;
  }
`
