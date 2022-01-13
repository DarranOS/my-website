import React from "react";
import data from "../assets/data/projectData";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../styles/Colors";

function ViewProjects({ textColor }) {
  return (
    <Container>
      <Heading>
        <h2>My Projects</h2>
      </Heading>
      <TextContainer color={textColor}>
        <h4>I'm a self-taught Full-Stack developer</h4>

        <p>I made an effort to experiement with as many modern frameworks as possible.</p>
        <h4>Then the Lockdowns happened...</h4>
        <p>
          While others were learning to bake Banana Bread, I kept myself sane and
          entertained with Javascript tutorials on Youtube. I found a passion that I
          didn't know I had.
        </p>
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
    </Container>
  );
}

export default ViewProjects;

const Container = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 0.1fr 0.66fr 1fr;
  gap: 2vw;
`;

const Heading = styled.div`
  h2 {
    color: white;
    writing-mode: tb-rl;
    transform: rotate(-165deg);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${(props) => props.color};
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
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: flex-end;
  padding-right: 2rem;
  transistion: all 0.2s ease-in;
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 20px;
  width: 33%;

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

  .project-2 {
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
  }

  h3 {
    font-size: 2rem;
  }

  :hover {
    z-index: 25;
  }
`;
