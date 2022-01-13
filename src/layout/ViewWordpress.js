import React from "react";
import data from "../assets/data/wordpressData";
import styled from "styled-components";

function ViewWordpress() {
  return (
    <Container>
      {data.map((project) => (
        <ProjectBox key={project.title}>
          <h3>{project.title}</h3>
          <img src={project.img} alt="" />
        </ProjectBox>
      ))}
    </Container>
  );
}

export default ViewWordpress;

const Container = styled.div`
  display: grid;
  width: 70px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2vw;
`;
const ProjectBox = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: green;
  padding-bottom: 2vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
