import React from 'react'
import styled from 'styled-components'
import { IconGen, ProjectIcons, SpecialButton, Frame } from 'components'
import { colors } from 'styles'

const Detail = ({ selectedProject, setModalIsOpen }) => {
  const { title, done, desc, icons, deploy, img, git, quick, status, todo } =
    selectedProject

  return (
    <Container>
      <FrameDiv>
        <Frame src={img} href={deploy} />

        <ProjectName>
          <h2>{title}</h2>

          <p>
            <em>Status: {status} </em>
          </p>
        </ProjectName>
        <ExternalLinks>
          <div onClick={() => setModalIsOpen(false)}>
            <SpecialButton
              link={['']}
              text="Back"
              tColor={colors.white}
              bgColor={colors.primary}
              border={`2px solid ${colors.primary}`}
            >
              <IconGen
                icon="Backspace"
                color={`${colors.white}`}
                size="2rem"
                hovercolor={`${colors.secondary}`}
              />
              <p>Back</p>
            </SpecialButton>
          </div>

          {git ? (
            <SpecialButton
              link={[git]}
              text="Repo"
              tColor={colors.primary}
              bgColor="transparent"
              border={`2px solid ${colors.primary}`}
            >
              <IconGen
                icon="Github"
                color={`${colors.primary}`}
                size="2rem"
                hovercolor={`${colors.secondary}`}
              />
              <p>Repo</p>
            </SpecialButton>
          ) : null}

          <SpecialButton
            link={[deploy]}
            text="Deployment"
            tColor={colors.white}
            bgColor={colors.compBlue}
            border={`2px solid ${colors.compBlue}`}
          >
            <IconGen icon="Deploy" color={colors.white} size="2rem" hovercolor="white" />
            <p>Visit</p>
          </SpecialButton>
        </ExternalLinks>
      </FrameDiv>
      <ProjectDesc>
        <div>
          <ProjectNameDesk>
            <h2>{title}</h2>

            <p>
              <em>Status: {status} </em>
            </p>
          </ProjectNameDesk>
          <QuickNotes>
            <OverView>
              <h4>Overview</h4>
            </OverView>
            {quick.map((para, index) => (
              <li key={index}>
                <p>{para}</p>
              </li>
            ))}
          </QuickNotes>
          <ProjectBrief>
            {desc.map((para, index) => (
              <li key={index}>
                <p>{para}</p>
              </li>
            ))}
          </ProjectBrief>
          <ProjectToDo>
            <h4>Planned updates</h4>

            <TodoList>
              {todo &&
                todo.map((para, index) => (
                  <li key={index}>
                    <IconGen icon="Github" color={colors.primary} size="2rem" />
                    <p>{para}</p>
                  </li>
                ))}
            </TodoList>
            <DoneList>
              {done &&
                done.map((para, index) => (
                  <li key={index}>
                    <IconGen icon="TickBox" color={colors.compBlue} size="2rem" />
                    <span>
                      <p>{para}</p>
                    </span>
                  </li>
                ))}
            </DoneList>
          </ProjectToDo>
        </div>
        <div>
          <ProjectIconsDiv>
            <IconText>Made with questionable code, coffee and ....</IconText>
            <ProjectIcons icons={icons} />
          </ProjectIconsDiv>
        </div>
      </ProjectDesc>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4vw;
  width: auto;
  height: 100%;

  @media (min-width: 1200px) {
    gap: 8rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 6vh;
    margin: 6vh;
    ${'' /* height: auto; */}
    border: 1px solid ${colors.primary};
  }
`

const FrameDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  margin-block: 2vh;

  @media (min-width: 1200px) {
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    margin-block: 0vh;
  }
`

const ProjectName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 3vh;
  margin-bottom: 1vh;
  width: 100%;

  @media (min-width: 1200px) {
    grid-area: title;
    margin-bottom: 2vh;
    padding: 0;
    margin-top: 3vh;
    display: none;
  }

  h2 {
    font-size: 6vw;
    color: ${colors.primary};
    position: relative;

    @media (min-width: 1200px) {
      font-size: 2vw;
      line-height: 1.2;
      border-bottom: 1px solid ${colors.primary};
      max-width: 80%;
    }
  }

  p {
    font-size: 1.4rem;
    font-weight: 500;
  }
`

const ProjectNameDesk = styled(ProjectName)`
  display: none;

  @media (min-width: 1200px) {
    margin-top: 0;
    grid-area: title;
    margin-bottom: 2vh;

    padding: 0;
    display: flex;
  }
`

const ExternalLinks = styled.div`
  margin: 1vh 0;
  display: flex;
  width: 100%;
  justify-content: space-between;

  p {
    font-size: 1.4rem;
  }
  @media (min-width: 1200px) {
    display: flex;
    justify-contents: space-between;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 0;

    p {
      display: flex;
    }
  }
`

const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 2vh;

  @media (min-width: 1200px) {
    justify-content: space-between;
    align-items: flex-start;
  }

  h4 {
    font-size: 2rem;
    color: ${colors.primary};
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.6;
    color: black;
  }
  li {
    display: flex;
    margin-bottom: 0.6rem;

    @media (min-width: 1200px) {
      width: 100%;
    }

    :last-child {
      margin-bottom: 0;
    }
  }
`

const OverView = styled.div`
  margin-top: 1rem;
  h4 {
    font-size: 1.4rem;
    margin-block: 0.4rem;

    p {
      margin-bottom: 1rem;
    }

    @media (min-width: 1200px) {
      font-size: 1.4rem;
    }
  }
`
const QuickNotes = styled.div``

const ProjectBrief = styled.div`
  list-style: none;
  color: white;
  margin-block: 3.2rem;
  display: none;

  li {
    margin-bottom: 1.2rem;
  }

  li:last-of-type {
    margin-bottom: none;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    max-width: 80%;
  }
`
const ProjectToDo = styled.div`
  list-style: none;
  width: 100%;
  margin-top: 2rem;

  h4 {
    font-size: 1.4rem;
    margin-block: 0.4rem;
  }

  li {
    display: flex;
    align-items: center;
    padding: 0.8rem 0;

    p {
      line-height: 1.4;
    }

    div {
      width: 2rem;
    }
  }
  p {
    font-size: 1.4rem;
    margin-left: 1rem;
    line-height: 1.8;
  }
`

const TodoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`
const DoneList = styled.ul`
  display: none;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  li {
    padding: 0.6rem 0;
  }

  span {
    color: ${colors.compBlue};
    text-decoration: line-through;

    p {
      color: ${colors.compBlue};
      margin-left: 1rem;
    }
  }
  @media (min-width: 992px) {
    display: grid;
  } ;
`

const ProjectIconsDiv = styled.div`
  grid-area: footer;
  place-self: end start;
  width: 100%;
`

const IconText = styled.p`
  font-size: 1.4rem;
  margin-top: 1.2rem;
  padding-top: 1.6rem;
  padding-bottom: 0.8rem;
  border-top: 1px solid ${colors.primary};

  @media (min-width: 1200px) {
    border-top: 1px solid transparent;
  }
`
