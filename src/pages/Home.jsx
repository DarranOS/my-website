import { Welcome, Projects, AboutMe, Skills } from 'layout'
import { Footer } from 'container'
import { ProjectModal } from 'components'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  return (
    <>
      <AnimatePresence>
        {modalIsOpen ? (
          <ProjectModal
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
          ></ProjectModal>
        ) : null}
      </AnimatePresence>
      <Welcome />
      <AboutMe />
      <Projects
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <Skills />
      <Footer />
    </>
  )
}

export default Home
