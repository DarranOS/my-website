import React from 'react'
import styled from 'styled-components'
import Animations from '../styles/Animations'
import { ArrowDown } from '../components/svgs/svgs'
import MainButton from '../components/MainButton'

const Section = ({
  heading1,
  heading2,
  heading3,
  heading4,
  desc,
  descColor,
  leftButton,
  rightButton,
  color,
  children,
  bgImg,
  bgImgOpac,
  topMargin,
  topPadding,
  bgOpac,
  bgColor,
  zIndex,
  clip,
  arrow,
  link,
}) => {
  return (
    <Wrap margin={topMargin} padding={topPadding} zIndex={zIndex}>
      <Background clip={clip}>
        <BackOverlay opacity={bgOpac} color={bgColor}></BackOverlay>
        {bgImg && (
          <BgImgContainer opacity={bgImgOpac[0]} mixMode={bgImgOpac[1]}>
            <img src={bgImg} alt="" />
          </BgImgContainer>
        )}
      </Background>

      <CentralDiv>
        <ItemText>
          {heading1 && (
            <HeadingContainer1 color={heading1[1]}>
              {heading1[0].map((head, index) => (
                <h1 key={index}>{heading1[0][index]}</h1>
              ))}
            </HeadingContainer1>
          )}
          {heading2 && (
            <HeadingContainer2 color={heading2[1]}>
              {heading2[0].map((head, index) => (
                <h2 key={index}>{heading2[0][index]}</h2>
              ))}
            </HeadingContainer2>
          )}
          {heading3 && (
            <HeadingContainer3>
              <a>
                <h3>{heading3[0]}</h3>
              </a>
            </HeadingContainer3>
          )}

          {heading4 && <h4>{heading4}</h4>}
          {desc && <p color={descColor}>{desc}</p>}
        </ItemText>

        {children && <ChildrenContainer>{children}</ChildrenContainer>}
        {leftButton && (
          <Buttons>
            <ButtonGroup>
              <MainButton
                link={leftButton[0]}
                text={leftButton[1]}
                color={leftButton[2]}
                hover={leftButton[3]}
                noShadow={leftButton[4]}
              />
              {rightButton && (
                <RightButton text={rightButton[0]} color={rightButton[1]} />
              )}
            </ButtonGroup>
          </Buttons>
        )}
      </CentralDiv>
      {arrow && (
        <ArrowContainer>
          <ArrowProxy color={color} />
        </ArrowContainer>
      )}
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  ${
    '' /* margin-top: ${(props) => props.margin};
  padding-top: ${(props) => props.padding}; */
  }

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

  ${
    '' /* :last-child {
    margin-bottom: 30px;
  } */
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

const LogoDiv = styled.div`
  position: absolute;
  padding: 5% 5%;
  top: 0;
  left: 0;
  right: 0;
`

const CentralDiv = styled.div`
  width: 100%;
  border: 4px solid blue;
  padding: 0;
`

const ItemText = styled.div`
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

const ChildrenContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 5vh;
`

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-evenly;
  margin-bottom: 30px;
  animation: 0.5s ${Animations.moveUpBottom} ease-in-out;
  animation-iteration-count: 1;
  webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  animation-delay: 0.75s;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const RightButton = styled(MainButton)`
  background: red;
`

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
`

const ArrowProxy = styled(ArrowDown)`
  height: 50px;
  width: auto;
  animation: 1s ${Animations.animateDown} infinite 1.5s;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
