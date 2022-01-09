import React from "react";
import data from "../assets/data/projectData";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ViewProjects() {
  return (
    <Container>
      {data.map((project) => (
        <ProjectBox>
          <Link to={project.url}>
            <h3>{project.title}</h3>
            <img src={project.img} alt="" />
          </Link>
        </ProjectBox>
      ))}
    </Container>
  );
}

export default ViewProjects;

const Container = styled.div`
  display: grid;
  width: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2vw;
`;
const ProjectBox = styled.button`
  display: inline-block;
  width: 100px;
  height: 100px;
  cursor: pointer;

  padding-bottom: 2vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    font-size: 2rem;
  }
`;
