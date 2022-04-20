import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { colors } from 'styles'

const ProjectBox = ({ project, setSelectedProject, setModalIsOpen }) => {
  const { title, img } = project

  const handleClick = () => {
    setSelectedProject(project)
    setModalIsOpen(true)
  }

  return (
    <Project
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      layout
      onClick={handleClick}
    >
      <ImgDiv>
        <img src={img} alt="" />
      </ImgDiv>

      <TextDiv>
        <h4>{title}</h4>
      </TextDiv>
    </Project>
  )
}

export default ProjectBox

const Project = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0.6rem;
  overflow: hidden;
  height: min-content;
  cursor: pointer;
`

const ImgDiv = styled.div`
  position: relative;
  width: 100%;
  background: ${colors.primary};

  img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    object-fit: cover;
    top: 0;
    opacity: 0.7;
  }
`
const TextDiv = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;

  h4 {
    margin-top: 1.6rem;
    color: ${colors.primary};
    margin-bottom: 0.8rem;
  }
`
