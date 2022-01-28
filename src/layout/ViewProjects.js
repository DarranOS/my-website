import React from 'react'
import data from '../assets/data/projectData'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../styles/Colors'
// import { motion, AnimatePresence } from 'framer-motion'
// import FadeInUp from '../components/FadeInUp'
// import Slide from '../components/Slide'
import Frame from '../components/Frame'
import Animations from '../styles/Animations'

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
}

const ViewProjects = () => {
  return (
    <Container>
      <Heading>
        <h2> Projects</h2>
      </Heading>
      <MainContainer>
        <ProjectBox>
          <Link to={data[0].url}>
            <Frame src={data[1].img} />
          </Link>
        </ProjectBox>
        <ProjectBox>
          <Link to={data[0].url}>
            <Frame src={data[2].img} />
          </Link>{' '}
        </ProjectBox>
        <ProjectBox>
          <Link to={data[0].url}>
            <Frame src={data[3].img} />
          </Link>{' '}
        </ProjectBox>
      </MainContainer>
    </Container>
  )
}

export default ViewProjects

const Container = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0vh 5vw;

  @media (min-width: 667px) {
    padding: 0vh 15vw;
  }
`

const Heading = styled.div`
  width: 100%;
  z-index: 10;

  
  @media (min-width: 667px) {
  place-self: center;
  }

  h2 {
    background-image: linear-gradient(to right, #fec922, #fe9622);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: left;

    @media (min-width: 768px) {
      text-align: center;
      padding-right: 0;
      width: 100%;
  }
`

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  div:nth-child(2) {
    justify-content: flex-start;
  }
`

const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 5vh 0vw;
  filter: drop-shadow(0px 4px 2px orange);
  animation: 0.5s ${Animations.moveUpBottom} ease-in-out;
  animation-iteration-count: 1;
  webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
  animation-delay: 0.5s;
`
/* 
const ProjectBox = styled.div`
  place-self: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;

  background: hotpink;


    img {
      border-radius: 5px;
      object-fit: cover;
      width: 20vw;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
      display: inline-block;
    }
  }

  h3 {
    font-size: 2rem;
  }

  :hover {
    z-index: 25;
  }
` */
