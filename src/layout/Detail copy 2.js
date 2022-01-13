import React from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'
import ProjectIcons from '../components/ProjectIcons'
import SecondaryButton from '../components/SecondaryButton'
import Background from './Background'
import Animations from '../styles/Animations'
import ProjectData from '../assets/data/projectData'
import {
  ChevronLeft1,
  ChevronRight1,
  StyledGitHub,
  StyledDeploy,
} from '../components/Chevrons'
import SpecialButton from '../components/SpecialButton'

function Detail({ info }) {
  const galleryLength = ProjectData.length
  return (
    <Container>
      <Background color={colors.grDarkOrange}>
        <img alt="" />
      </Background>
      <ProjectBoxLeft>
        <a
          href={`/projects-${Number(info.id) < 2 ? galleryLength : Number(info.id) - 1}`}
        >
          <ChevronLeft1 />
        </a>
      </ProjectBoxLeft>

      <ProjectBoxCenter>
        <ProjectName>
          <h2>{info.title}</h2>
        </ProjectName>
        <ExternalLinks>
          {/* <a href={info.git} target="_blank" rel="noopener noreferrer">
            <StyledGitHub />
          </a> */}
        </ExternalLinks>
        <ProjectImg>
          <img src={info.img} alt="" />
          <SpecialButton link={[info.deploy]} text="Deploy">
            <StyledDeploy />
          </SpecialButton>
          <SpecialButton link={[info.git]} text="Repo">
            <StyledGitHub />
          </SpecialButton>
        </ProjectImg>

        <ProjectInfo>
          <ProjectDesc>
            <h4>The Brief</h4>
            {info.desc.map((para) => (
              <li>
                <p>{para}</p>
              </li>
            ))}
            <h4>Next steps/To Do List</h4>
            {info.todo &&
              info.todo.map((para) => (
                <li>
                  <p>{para}</p>
                </li>
              ))}
          </ProjectDesc>
        </ProjectInfo>

        <ProjectIconsDiv>
          <ProjectIcons icons={info.icons} />
        </ProjectIconsDiv>
      </ProjectBoxCenter>

      <ProjectBoxRight>
        <a
          href={`/projects-${Number(info.id) >= galleryLength ? 1 : Number(info.id) + 1}`}
        >
          <ChevronRight1 />
        </a>
      </ProjectBoxRight>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  height: 96vh;
  max-height: 100vh;
  padding: 0 calc(3.5vw + 5px);
  display: grid;
  grid: 'left center right';
  grid-template-columns: 1fr 7fr 1fr;
  place-items: center;
  ${'' /* background: black; */}
  gap: 2rem;
`

const ProjectBoxLeft = styled.div`
  grid-area: left;
  place-items: center;
`

const ProjectBoxRight = styled.div`
  grid-area: right;
  place-items: center;
`

const ProjectBoxCenter = styled.div`
  display: grid;
  grid:
    'title title buttons'
    'image desc desc'
    'icons icons icons';
  border: 1px solid pink;
  gap: 4rem;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
  height: 75vh;
`

const ProjectName = styled.div`
  grid-area: title;
  color: white;
  border: 1px solid green;
  place-self: end start;

  h2 {
    color: white;
    position: relative;
    animation: 0.5s ${Animations.fadeInRight} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.2s;
    line-height: 1;
  }
`

const ExternalLinks = styled.div`
   {
    grid-area: buttons;
    place-self: end end;
    display: flex;
    justify-contents: center;
    align-items: center;
  }
`

const ProjectImg = styled.div`
  grid-area: image;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    filter: drop-shadow(0 1rem 1rem rgba(0, 0, 0, 0.4));
  }
`

const ProjectInfo = styled.div`
  grid-area: desc;

  display: flex;
  flex-direction: column;
  border: 1px solid yellow;
  justify-content: space-between;
`

const ProjectDesc = styled.div`
  list-style: none;
  color: white;

  p {
    font-size: 2rem;
  }
`

const ProjectIconsDiv = styled.div`
  grid-area: icons;
  display: flex;
  justify-content: space-between;
`

const ProjectButton = styled(SecondaryButton)`
  color: orange;
  background: white;
`

const deployButton = styled(SecondaryButton)`
  grid-area: buttons;
  background: crimson;
`
