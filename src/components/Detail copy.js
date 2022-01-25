import React from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'
import ProjectIcons from './ProjectIcons'
import Background from '../layout/Background'
import Animations from '../styles/Animations'
import ProjectData from '../assets/data/projectData'
import { ChevronLeft1, ChevronRight1 } from './Chevrons'
import SpecialButton from './SpecialButton'
import IconGen from './IconGen'

const Detail = ({ info }) => {
  const galleryLength = ProjectData.length

  return (
    <Container bg={info.img}>
      <Background color={colors.grLightOrange}>
        <img alt="" />
      </Background>
      <ProjectImage>
        <img src={info.img} alt="" />
      </ProjectImage>

      <LeftNavChevron>
        <a
          href={`/projects-${Number(info.id) < 2 ? galleryLength : Number(info.id) - 1}`}
        >
          <ChevronLeft1 />
        </a>
      </LeftNavChevron>
      <RightNavChevron>
        <a
          href={`/projects-${Number(info.id) >= galleryLength ? 1 : Number(info.id) + 1}`}
        >
          <ChevronRight1 />
        </a>
      </RightNavChevron>

      <ProjectName>
        <h2>{info.title}</h2>
      </ProjectName>

      <ProjectInfo>
        <ExternalLinks>
          <SpecialButton
            link={['/', 'self', 'noopener noreferrer']}
            text="Back"
            tColor={colors.white}
            bgColor="transparent"
            border="2px solid white"
          >
            <IconGen icon="Backspace" color="white" size="3rem" hovercolor="white" />
          </SpecialButton>
          <SpecialButton
            link={[info.git]}
            text="Repo"
            tColor={colors.white}
            bgColor="transparent"
            border="2px solid white"
          >
            <IconGen icon="Github" color="white" size="3rem" hovercolor="white" />
          </SpecialButton>
          <SpecialButton
            link={[info.deploy]}
            text="Deployment"
            tColor={colors.primary}
            bgColor={colors.white}
            border="3px solid white"
          >
            <IconGen
              icon="Deploy"
              color={colors.primary}
              size="3rem"
              hovercolor="white"
            />
          </SpecialButton>
        </ExternalLinks>

        <ProjectDesc>
          <ProjectBrief>
            <h4>The Brief</h4>
            {info.desc.map((para) => (
              <li>
                <p>{para}</p>
              </li>
            ))}
          </ProjectBrief>

          <ProjectToDo>
            <h4>Planned updates</h4>

            <TodoList>
              {info.todo &&
                info.todo.map((para) => (
                  <li key={info.id}>
                    <IconGen icon="Github" color="white" size="3rem" />
                    <p>{para}</p>
                  </li>
                ))}
            </TodoList>
            <DoneList>
              {info.done &&
                info.done.map((para) => (
                  <li key={info.id}>
                    <IconGen icon="TickBox" color="forestgreen" size="3rem" />
                    <span>
                      <p>{para}</p>
                    </span>
                  </li>
                ))}
            </DoneList>
          </ProjectToDo>
        </ProjectDesc>
        <ProjectIconsDiv>
          <IconText>Made with questionable code, coffee and ....</IconText>
          <ProjectIcons icons={info.icons} />
        </ProjectIconsDiv>
      </ProjectInfo>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  padding: 0 calc(5.5vw + 5rem);
  display: flex;
  height: 100vh;
  gap: 10vmin;
  position: relative;
`

const LeftNavChevron = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 8%;
`
const RightNavChevron = styled.div`
  position: absolute;
  z-index: 100;
  right: 8%;
  top: 50%;
`

const ProjectImage = styled.div`
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  position: absolute;
  top: 25vh;
  right: 20%;
  z-index: -10;
  width: 30%;
  img {
    opacity: 0;
  }
`

const ProjectName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;

  h2 {
    margin-right: 3vw;
    color: white;
    position: relative;
    animation: 0.5s ${Animations.fadeDropDown} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.2s;
    line-height: 1;
    writing-mode: tb-rl;
  }
`

const ProjectInfo = styled.div`
  grid-area: desc;
  place-self: center start;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr;
  width: 76%;
  gap: 10vmin;
  grid:
    'links'
    'info'
    'icons';
`

const ExternalLinks = styled.div`
  grid-area: links;
  place-self: start;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 2rem;
`

const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: space-around;
`
const ProjectBrief = styled.div`
  list-style: none;
  color: white;
  margin-bottom: 5rem;

  h4 {
    font-size: 4rem;
    color: ${colors.grey6};
    text-decoration: underline;
    margin-bottom: 3rem;
  }
  p {
    font-size: 1.8rem;
  }

  li {
    margin-bottom: 1.8rem;
  }

  li:last-of-type {
    margin-bottom: none;
  }
`
const ProjectToDo = styled.div`
  list-style: none;
  color: white;

  h4 {
    font-size: 3rem;
    color: ${colors.grey6};
    text-decoration: underline;
    margin-bottom: 3rem;
  }
  li {
    display: flex;
    align-items: center;
    padding: 0.8rem 0;
  }
  p {
    font-size: 1.6rem;
    margin-left: 1.6rem;
  }
`

const TodoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 40%;
`
const DoneList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 40%;

  span {
    color: forestgreen;
    text-decoration: line-through;

    p {
      color: forestgreen;
      font-size: 1.6rem;
      margin-left: 1.6rem;
      font-weight: bold;
    }
  }
`

const ProjectIconsDiv = styled.div`
  grid-area: icons;
  place-self: end start;
  width: 100%;
`

const IconText = styled.p`
  color: white;
  font-size: 1.4rem;
  padding-top: 1rem;
  border-top: 1px solid white;
`
