import React from 'react'
import data from '../assets/data/projectData'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../styles/Colors'

function ViewProjects({ textColor }) {
  return (
    <Container>
      <Heading>
        <h2>My Projects</h2>
      </Heading>
      <MainContainer>
        <TextContainer color={textColor}>
          <h3>Technologies Used</h3>
        </TextContainer>
        <ImageContainer>
          {data.map((project) => (
            <ProjectBox key={project.id}>
              <div className={project.id}>
                <Link to={project.url}>
                  <img src={project.img} alt="" />
                </Link>
              </div>
            </ProjectBox>
          ))}
        </ImageContainer>
      </MainContainer>
    </Container>
  )
}

export default ViewProjects

const Container = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 16fr;
  gap: 10vw;
`

const MainContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-row: 1fr 1fr;
`

const Heading = styled.div`
  h2 {
    color: black;
    writing-mode: tb-rl;
    transform: rotate(-180deg);
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${(props) => props.color};

  h3 {
    color: black;
  }
  p {
    font-size: 1.6rem;
    color: white;
    background: orange;
    box-decoration-break: clone;
    display: inline;

    ::first-letter {
      font-size: 2rem;
    }

    ::selection {
      background: black;
      color: yellow;
      font-size: 3.6rem;
    }
  }
`

const ImageContainer = styled.div`
  transistion: all 0.2s ease-in;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`

const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;
  width: 20%;

  transition: all 1s;
  transform: rotate(15deg) skewY(1deg) skewX(1deg);

  div {
    width: 100%;
    outline-offset: 2rem;
    transition: all 0.4s ease-in-out;

    :hover {
      transform: scale(1.1) rotate(-18deg) skewY(-1deg) skewX(-1deg);
    }

    :not(:hover) {
      transform: scale(0.95);
    }

    img {
      border-radius: 5px;
      object-fit: cover;
      width: 20vw;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
      display: inline-block;

      &:hover {
        transform: scale(1.2) rotate(3deg) translateY(-2rem) translateX(2rem);
        outline-offset: 1.5rem;
        outline: 0.5rem solid ${colors.compBlue};
      }
    }
  }

  ${
    '' /* .project-2 {
    top: 20rem;
  }

  .project-4,
  .project-5 {
    top: -10rem;
    left: -10rem;
    position: absolute;

    :hover {
      top: -15rem;
    }
  } */
  }

  h3 {
    font-size: 2rem;
  }

  :hover {
    z-index: 25;
  }
`
