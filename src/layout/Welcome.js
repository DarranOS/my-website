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
        <InnerDiv>
          <div>
            <HeadingContainer1>
              <h1>Darran</h1>
            </HeadingContainer1>

            <HeadingContainer2>
              <h1>O'Shea</h1>
            </HeadingContainer2>
          </div>
          <div style={{ width: '100%' }}>
            <HeadingContainer3>
              <h2>Designer</h2>
              <h2>Fullstack</h2>
              <h2>Developer</h2>
            </HeadingContainer3>
          </div>
        </InnerDiv>
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

  img {
    width: 100%;
    object-fit: cover;
    transform: scale(1.1);
  }

  @media (min-width: 576px) {
    display: flex;

    img {
      height: 100%;
      transform: scale(1);
    }
  }
  @media (min-width: 768px) {
    display: none;

    img {
      width: 150%;
      object-fit: cover;
    }
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
    right: 30;

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
  justify-content: center;
  align-items: center;
`

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: auto;
  align-items: center;
  margin-top: 5%;

  @media (min-width: 768px) {
    margin-top: 0;
    justify-content: center;
    align-items: center;
    padding-left: 15%;
  }

  @media (min-width: 992px) {
    justify-content: center;
    align-items: flex-start;
    ${'' /* padding-left: 40%; */}
  }
`

const HeadingContainer1 = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
  }

  h1 {
    font-size: min(9.8rem, 17vw);
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
      font-size: min(10rem, 10.2vw);

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
  justify-content: center;
  @media (min-width: 992px) {
    justify-content: center;
  }

  h1 {
    font-size: min(11.5rem, 22vw);
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
      font-size: min(11.2rem, 12vw);
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
  padding-bottom: max(20px, 5vh);
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 576px) {
    align-items: center;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  h2 {
    width: min-content;
    display: flex;
    font-size: min(5rem, 7.5vw);
    line-height: 0.1;
    padding: min(2rem, 4.6vw) min(1rem, 2.4vh) min(1.2rem, 1.8vh) min(1rem, 4.2vw);
    color: ${colors.compBlue2};
    animation: 0.5s ${Animations.moveUpBottom} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.6s;
    background: ${colors.white};
    margin: 0.7vh 0;

    @media (min-width: 578px) {
      font-size: min(4.2rem, 6vw);
    }

    @media (min-width: 768px) {
      justify-content: center;
      font-size: min(1.8rem, 4vw);
      background: ${colors.white};
    }
    @media (min-width: 992px) {
      font-size: min(2rem, 2.8vw);
      justify-content: center;
      background: ${colors.white};
    }
  }

  h2:nth-child(2) {
    color: white;
    background: ${colors.compBlue2};
    animation-delay: 0.8s;

    @media (min-width: 768px) {
      margin-left: 0.4rem;
      margin-right: 0.4rem;
      justify-content: center;
    }
  }
  h2:nth-child(3) {
    animation-delay: 1s;
  }
`
