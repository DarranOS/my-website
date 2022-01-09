import React from "react";
import styled from "styled-components";
import colors from "../styles/Colors";
import ProjectIcons from "./ProjectIcons";

function Detail(props) {
  return (
    <Container>
      <Background>
        <img src={props.info.bgImg} alt="" />
      </Background>
      <ProjectBox>
        <ProjectBoxLeft>
          <ProjectInfo>
            <ProjectName>{props.info.title}</ProjectName>
            <ProjectDesc>
              {props.info.desc.map((para) => (
                <li>
                  <p>{para}</p>
                </li>
              ))}
            </ProjectDesc>
            <ProjectIconsDiv>
              <ProjectIcons icons={props.info.icons} />
            </ProjectIconsDiv>
          </ProjectInfo>
        </ProjectBoxLeft>
        <ProjectBoxRight>
          <img src={props.info.img} alt="" />
        </ProjectBoxRight>
      </ProjectBox>
      <div></div>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: 100vh;
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.4;
  color: ${colors.secondary};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectBox = styled.div`
  display: flex;
  width: 70vw;
  padding: 3px;
`;
const ProjectBoxLeft = styled.div``;
const ProjectBoxRight = styled.button`
  background: green;
  width: 100%;

  :active,
  :focus {
    outline: 5px solid pink;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ProjectInfo = styled.div``;
const ProjectName = styled.div`
  font-size: 4rem;
`;
const ProjectDesc = styled.div`
  font-size: 1.6rem;
`;
const ProjectIconsDiv = styled.div`
  display: flex;
  margin-top: 2vh;
`;
