import styled from 'styled-components'
import { projectData } from 'data'
import { useState, useEffect } from 'react'
import { ProjectBox, ProjectFilter } from 'components'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = ({ setSelectedProject, setModalIsOpen }) => {
  const [projects, setProjects] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = () => {
    const data = projectData
    setProjects(data)
    setFiltered(data)
  }

  return (
    <Container>
      <InnerContainer>
        <Heading>
          {activeCategory === 'All'
            ? 'Some of my Work...'
            : `Some of my ${activeCategory} Work`}
        </Heading>
        <ProjectFilter
          projects={projects}
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {/* The Following div is a framer motion div. Motion is added in the styling definitions below.*/}
        <ProjectsGrid
          layout
          // transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
        >
          <AnimatePresence>
            {filtered.map((project, index) => (
              <ProjectBox
                key={project.id + index}
                project={project}
                setSelectedProject={setSelectedProject}
                setModalIsOpen={setModalIsOpen}
              />
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </InnerContainer>
    </Container>
  )
}

export default Projects

const Container = styled.div`
  margin-top: 5vh;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  z-index: 10;
  overflow-x: hidden;
  width: 100%;
  padding: 20vh 5vw;
  min-height: 100vh;
  background-image: linear-gradient(40deg, #ffc328 0%, #f29911 100%);
  clip-path: polygon(0% 2%, 100% 0%, 100% 98%, 0% 100%);

  @media (min-width: 992px) {
    margin-top: 0vh;
    display: flex;
    flex-direction: column;
    padding: 15vh 15vw;
    clip-path: polygon(0 6%, 100% 0%, 100% 94%, 0% 100%);
    padding-top: 20vh;
    padding-bottom: 16vh;
    align-items: center;
    max-height: 100%;
  }
`

const InnerContainer = styled.div`
  @media (min-width: 1300px) {
    width: 1200px;
    margin-block: 6vh;
  }
`

const Heading = styled.h3`
  grid-area: heading;
  width: 100%;
  z-index: 100;
  font-size: 4rem;
  color: white;
  text-align: left;

  @media (min-width: 992px) {
    margin-block: 0;
    width: 70%;
    padding-right: 0;
  }
`
// Framer motion Div
const ProjectsGrid = styled(motion.div)`
  display: grid;

  grid-template-columns: 1fr;
  gap: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 31%));
    margin-bottom: 10vh;
  }
`
