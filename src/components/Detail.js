import React from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'
import ProjectIcons from './ProjectIcons'
import Background from '../layout/Background'
import Animations from '../styles/Animations'
import ProjectData from '../assets/data/projectData'
import SpecialButton from './SpecialButton'
import IconGen from './IconGen'
import Frame from './Frame'

const Detail = ({ info }) => {
  const galleryLength = ProjectData.length

  return (
    <Container bg={info.img}>
      <Background color={colors.grLightOrange}></Background>

      <ProjectInfo>
        <ProjectName>
          <h2>{info.title}</h2>
        </ProjectName>
        <ProjectHeader>
          <LeftNavChevron>
            <a
              href={`/projects-${
                Number(info.id) < 2 ? galleryLength : Number(info.id) - 1
              }`}
            >
              <IconGen icon="ChevronThinLeft" size="42px" color={colors.white} />
            </a>
          </LeftNavChevron>
          <FrameDiv>
            <Frame src={info.img} />
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
                border="2px solid white"
              >
                <IconGen
                  icon="Deploy"
                  color={colors.primary}
                  size="3rem"
                  hovercolor="white"
                />
              </SpecialButton>
            </ExternalLinks>
          </FrameDiv>
          <RightNavChevron>
            <a
              href={`/projects-${
                Number(info.id) >= galleryLength ? 1 : Number(info.id) + 1
              }`}
            >
              <IconGen icon="ChevronThinRight" size="42px" color={colors.white} />
            </a>
          </RightNavChevron>
        </ProjectHeader>

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
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 2vh 2vh;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 calc(5.5vw + 5rem);
  }
`

const ProjectHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    justify-contents: space-around;
  }
`

const LeftNavChevron = styled.div`
  display: flex;
  margin-left: -20px;
  margin-bottom: 5rem;
`
const RightNavChevron = styled.div`
  display: flex;
  position: relative;
  margin-right: -20px;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    position: absolute;
    z-index: 100;
    top: 50%;
    right: 8%;
  }
`

const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const ProjectName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2vh;

  @media (min-width: 768px) {
    width: 20%;
  }

  h2 {
    font-size: 10.5vw;
    color: white;
    position: relative;
    animation: 0.5s ${Animations.fadeDropDown} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.2s;

    @media (min-width: 768px) {
      writing-mode: tb-rl;
      margin-right: 3vw;
    }
  }
`

const ProjectInfo = styled.div`
  @media (min-width: 768px) {
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
  }
`

const ExternalLinks = styled.div`
  margin: 2vh 0;
  display: flex;
  justify-content: space-between;

  p {
    display: none;
  }
  @media (min-width: 768px) {
    grid-area: links;
    place-self: start;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
`

const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    justify-contents: space-around;
  }
`
const ProjectBrief = styled.div`
  list-style: none;
  color: white;
  margin-bottom: 3rem;

  h4 {
    font-size: 2rem;
    color: ${colors.white};
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.6rem;
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

  li {
    display: flex;
    align-items: center;
    padding: 0.8rem 0;

    div {
      width: 2rem;
    }
  }
  p {
    font-size: 1.6rem;
    margin-left: 1.6rem;
  }
`

const TodoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  li > div {
  }
`
const DoneList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

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
