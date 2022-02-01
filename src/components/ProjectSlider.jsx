import React, { useRef } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Detail from './Detail'
import data from '../assets/data/projectData'
import colors from '../styles/Colors'
import IconGen from './IconGen'

function ImgSlider() {
  const sliderRef = useRef(null)

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    ref: sliderRef,
    arrows: false,
  }

  return (
    <Container>
      <Heading>
        <HeadingLeft>
          <Title>
            <h2>Projects</h2>
            <p>Swipe Left or Right</p>
          </Title>
        </HeadingLeft>
        <HeadingRight>
          <Buttons>
            <div onClick={() => sliderRef.current.slickPrev()}>
              <IconGen
                icon="ChevronThinLeft"
                color="white"
                size="5rem"
                hovercolor="white"
              />
            </div>
            <div onClick={() => sliderRef.current.slickNext()}>
              <IconGen
                icon="ChevronThinRight"
                color="white"
                size="5rem"
                hovercolor="white"
              />
            </div>
          </Buttons>
        </HeadingRight>
      </Heading>

      <Carousel {...settings}>
        {data.map((info) => (
          <Detail key={info.title} info={info} />
        ))}
      </Carousel>
    </Container>
  )
}

export default ImgSlider

const Container = styled.div`
  background: ${colors.grDarkOrange};
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1vh 1vh;
  overflow-x: hidden;

  @media (min-width: 1200px) {
    padding: 0 calc(5.5vw + 5rem);
    height: 100vh;
    ${'' /* display: grid; */}
  }
`

const Heading = styled.div`
  margin-top: 2vh;
  display: flex;
  padding: 0 2vw;
  justify-content: space-between;

  width: 100%;
  z-index: 100;
  align-items: center;

  @media (min-width: 1200px) {
    place-self: center;
    padding: 0 2vw;
  }
`
const HeadingLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`
const HeadingRight = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Title = styled.div`
  h2 {
    padding-top: 0.5rem;
    color: white;
    font-size: 4.5vh;
  }

  p {
    color: white;
  }

  @media (min-width: 1200px) {
    text-align: center;
    padding-right: 0;
    width: 100%;

    p {
      display: none;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  cursor: pointer;
`

const Carousel = styled(Slider)`
  margin: 1vh 1vh;
  @media (min-width: 1200px) {
    margin: 0;
=
  }
`
