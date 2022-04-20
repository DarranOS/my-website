import styled from 'styled-components'
import { Detail } from 'components'
import { motion } from 'framer-motion'
import { colors } from 'styles'
import { useRef, useEffect } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

const ProjectModal = ({
  selectedProject,
  setSelectedProject,
  setModalIsOpen,
  modalIsOpen,
}) => {
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      if (modalIsOpen) {
        disableBodyScroll(ref.current)
      } else {
        enableBodyScroll(ref.current)
      }
      return () => {
        clearAllBodyScrollLocks()
      }
    }
  }, [modalIsOpen])

  const handleClick = () => {
    setModalIsOpen(false)
    setSelectedProject({})
  }
  return (
    <Container
      ref={ref}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.4 }}
      exit={{ opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <Closer onClick={handleClick} />
      <Background>
        <Detail selectedProject={selectedProject} setModalIsOpen={setModalIsOpen} />
      </Background>
    </Container>
  )
}

export default ProjectModal

const Container = styled(motion.div)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.shadow};
`

const Background = styled.div`
  background: white;
  height: 94vh;
  width: auto;
  margin: 5vw;
  z-index: 110;

  @media (min-width: 1200px) {
    margin-inline: 15%;
    margin-block: 4%;
    padding: 0.5vh;
    height: auto;
  }
`

const Closer = styled.div`
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
