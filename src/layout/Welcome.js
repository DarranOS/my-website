import styled from 'styled-components'
import Animations from '../styles/Animations'
import colors from '../styles/Colors'
import ClipPaths from '../styles/ClipPaths'
import gradient from '../styles/gradients'

const Welcome = () => {
  return (
    <Wrap>
      <Background clip={ClipPaths.hero}>
        <BackOverlay
          opacity={1}
          color={gradient(
            'linear',
            `${colors.primary}`,
            `${colors.secondary}`,
            '60',
            '80'
          )}
        ></BackOverlay>
        <BgImgContainer opacity={0.8} mixMode="multiply">
          <img src="/images/HeroDrink.webp" alt="" />
        </BgImgContainer>
        <BgImgContainerDesktop opacity={1} mixMode="multiply">
          <img src="/images/lucky2.webp" alt="" />
        </BgImgContainerDesktop>
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
            <h2>Designer</h2>
            <h2>Fullstack</h2>
            <h2>Developer</h2>
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
  width: 100%;
  z-index: 100;

  overflow-x: hidden;
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
  right: 0;
  bottom: 0;
  display: flex;

  mix-blend-mode: ${(props) => props.mixMode};

  @media (min-width: 768px) {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const BgImgContainerDesktop = styled.div`
  display: none;
  opacity: ${(props) => props.opacity};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  mix-blend-mode: ${(props) => props.mixMode};

  @media (min-width: 768px) {
    display: flex;
    right: 30px;
  }
  @media (min-width: 992px) {
    display: flex;
    right: 0;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

const CentralDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 992px) {
    margin-top: 0;
    justify-content: center;
    align-items: flex-start;
    padding-left: 40%;
  }
`

const HeadingContainer1 = styled.div`
  color: white;
  display: flex;
  justify-content: center;

  align-items: center;

  @media (min-width: 992px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  h1 {
    font-size: 17vw;
    letter-spacing: -0.5vw;
    line-height: 1.2;
    position: relative;
    animation: 0.5s ${Animations.fadeInRight} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.2s;

    ::first-letter {
      letter-spacing: -2vw;
    }

    @media (min-width: 768px) {
      font-size: 10vw;
      letter-spacing: -0.2vw;
      ::first-letter {
        letter-spacing: -0.4vw;
      }
    }
    @media (min-width: 992px) {
      font-size: 8.6vw;
      letter-spacing: -0.2vw;
      ::first-letter {
        letter-spacing: -0.4vw;
      }
    }
    @media (min-width: 1200px) {
      font-size: 6.5vw;
      letter-spacing: -0.2vw;
      ::first-letter {
        letter-spacing: -0.4vw;
      }
    }
  }
`

const HeadingContainer2 = styled.div`
  color: white;
  display: flex;
  margin-bottom: 2vh;
  justify-content: center;

  @media (min-width: 992px) {
    justify-content: center;
  }

  h1 {
    font-size: 22vw;
    letter-spacing: -1.25vw;
    line-height: 0.7;
    color: ${(props) => props.color};
    position: relative;
    animation: 0.5s ${Animations.fadeInLeft} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.4s;

    @media (min-width: 768px) {
      font-size: 12vw;
      letter-spacing: -0.2vw;
      ::first-letter {
        letter-spacing: -0.4vw;
      }
    }
    @media (min-width: 992px) {
      font-size: 9.8vw;
      letter-spacing: -0.2vw;
      ::first-letter {
        letter-spacing: -0.4vw;
      }
    }

    @media (min-width: 1200px) {
      font-size: 7.5vw;
      align-items: flex-start;
      letter-spacing: -0.2vw;
      ::first-letter {
        letter-spacing: -0.4vw;
      }
    }
  }
`

const HeadingContainer3 = styled.div`
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    align-items: center;
    padding-bottom: 0;
  }

  @media (min-width: 992px) {
    align-items: flex-start;
    padding-bottom: 0;
    flex-direction: row;
  }

  h2 {
    width: min-content;
    font-size: 10vw;
    line-height: 0.1;
    padding: 2rem 0 1.3rem 0;
    color: ${colors.compBlue2};
    animation: 0.5s ${Animations.moveUpBottom} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.6s;
    background: ${colors.white};
    margin: 0.4vh 0;

    @media (min-width: 768px) {
      font-size: 6.6vw;
      justify-content: center;
      padding: 3.2rem 0 2rem 0;
      background: ${colors.white};
    }
    @media (min-width: 992px) {
      font-size: 2.6vw;
      padding: 1.6rem 0 1.2rem 0;
      justify-content: center;
      background: ${colors.white};
    }

    @media (min-width: 1200px) {
      font-size: 1.6vw;
    }
  }

  h2:nth-child(2) {
    color: white;
    background: ${colors.compBlue2Fade};
    animation-delay: 0.8s;

    @media (min-width: 1200px) {
      color: ${colors.compBlue2Fade};
      padding: 1.6rem 1rem 1.2rem 1rem;
      justify-content: center;
      background: ${colors.white};
    }
  }
  h2:nth-child(3) {
    animation-delay: 1s;
  }
`
