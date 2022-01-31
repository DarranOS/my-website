import React from 'react'
import styled from 'styled-components'
import colors from '../styles/Colors'
import ProjectIcons from './ProjectIcons'
import Animations from '../styles/Animations'
import SpecialButton from './SpecialButton'
import IconGen from './IconGen'
import Frame from './Frame'
import { Link } from 'react-router-dom'

const Detail = ({ info }) => {
  return (
    <Container>
      {/* <ProjectInfo> */}
      <FrameDiv>
        <Frame src={info.img} href={info.deploy} />

        <ExternalLinks>
          <Link to="/">
            <SpecialButton
              link={['/', 'self', 'noopener noreferrer']}
              text="Back"
              tColor={colors.white}
              bgColor="transparent"
              border="2px solid white"
            >
              <IconGen icon="Backspace" color="white" size="3rem" hovercolor="white" />
              <p>Back</p>
            </SpecialButton>
          </Link>
          <SpecialButton
            link={[info.git]}
            text={info.git ? 'Repo' : 'NA'}
            disabled={!info.git}
            tColor={colors.white}
            bgColor="transparent"
            border={info.git ? '2px solid white' : '2px solid grey'}
          >
            <IconGen
              icon="Github"
              color={info.git ? 'white' : 'grey'}
              size="3rem"
              hovercolor="white"
            />
            {info.git ? <p>Repo</p> : <p style={{ color: 'grey' }}>NA</p>}
          </SpecialButton>
          <SpecialButton
            link={[info.deploy]}
            text="Deployment"
            tColor={colors.white}
            bgColor={colors.compBlue}
            border="2px solid white"
          >
            <IconGen icon="Deploy" color={colors.white} size="3rem" hovercolor="white" />
            <p>Visit</p>
          </SpecialButton>
        </ExternalLinks>
      </FrameDiv>
      <ProjectName>
        <h2>{info.title}</h2>

        <p>
          <em>Status: {info.status} </em>
        </p>
      </ProjectName>
      <ProjectDesc>
        <QuickNotes>
          {info.quick.map((para, index) => (
            <li key={index}>
              <p>{para}</p>
            </li>
          ))}
        </QuickNotes>
        <ProjectBrief>
          {info.desc.map((para, index) => (
            <li key={index}>
              <p>{para}</p>
            </li>
          ))}
        </ProjectBrief>
        <ProjectToDo>
          <h4>Planned updates</h4>

          <TodoList>
            {info.todo &&
              info.todo.map((para, index) => (
                <li key={index}>
                  <IconGen icon="Github" color="white" size="3rem" />
                  <p>{para}</p>
                </li>
              ))}
          </TodoList>
          <DoneList>
            {info.done &&
              info.done.map((para, index) => (
                <li key={index}>
                  <IconGen icon="TickBox" color={colors.compBlue} size="3rem" />
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
      {/* </ProjectInfo> */}
    </Container>
  )
}

export default Detail

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2vw;

  @media (min-width: 1200px) {
    padding: 2vh 2vw;
    display: grid;
    grid:
      'title title title'
      'left right right'
      'footer footer footer';
  }
`

const FrameDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  margin-top: 2vh;

  > a {
    filter: drop-shadow(0 1px 1px white);
    width: 100%;

    @media (min-width: 1200px) {
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    grid-area: left;
    align-items: flex-start;
    margin-top: 0;
    grid-column: 1 / 2;
    margin-right: 2vw;
    max-width: 30vw;
  }
`

const ProjectName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4vh;

  @media (min-width: 1200px) {
    grid-area: title;
    margin-bottom: 2vh;
    padding: 0;
    margin-top: 3vh;
  }

  h2 {
    font-size: 6vw;
    color: white;
    position: relative;
    animation: 0.5s ${Animations.fadeDropDown} ease-in-out;
    animation-iteration-count: 1;
    webkit-animation-fill-mode: backwards;
    animation-fill-mode: backwards;
    animation-delay: 0.2s;

    @media (min-width: 1200px) {
      font-size: 3.5vw;
      line-height: 0.8;
      border-bottom: 1px solid white;
    }
  }

  p {
    color: white;
  }
`

const ExternalLinks = styled.div`
  margin: 4vh 0;
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    display: none;
    font-size: 1.4rem;
  }
  @media (min-width: 1200px) {
    display: flex;
    justify-contents: space-between;
    width: 100%;

    p {
      display: flex;
    }
  }
`

const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
    justify-contents: center;
    grid-column: 2 / span 2;
    grid-area: right;
  }
`

const QuickNotes = styled.div`
  margin-bottom: 2vh;

  @media (min-width: 1200px) {
  }

  li {
    padding: 0.2rem;
    display: flex;
    font-weight: bold;
    margin-bottom: 1vh;

    @media (min-width: 1200px) {
      width: 100%;
    }

    :last-child {
      margin-bottom: 0;
    }
  }

  p {
    color: white;
    font-size: 1.8rem;
    line-height: 1.6;
    text-transform: uppercase;
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
    line-height: 2;
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
  width: 100%;

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
    margin-left: 1rem;
    line-height: 1.8;
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
    color: ${colors.compBlue};
    text-decoration: line-through;

    p {
      color: ${colors.compBlue};
      font-size: 1.6rem;
      margin-left: 1rem;
      font-weight: bold;
    }
  }
`

const ProjectIconsDiv = styled.div`
  grid-area: footer;
  place-self: end start;
  width: 100%;
`

const IconText = styled.p`
  color: white;
  font-size: 1.4rem;
  padding-top: 1rem;
  border-top: 1px solid white;
`
