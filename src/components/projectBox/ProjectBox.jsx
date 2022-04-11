import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import IconGen from '../IconGen'
import colors from '../../styles/Colors'
import { Link } from 'react-router-dom'
const ProjectBox = ({ title, quick, icons, img, url, git, tag, deploy, link }) => {
  return (
    <Project
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      layout
    >
      <ImgDiv>
        <Overlay
          initial={{ opacity: 0 }}
          whileHover={{ opacity: [0, 1] }}
          whileFocus={{ opacity: [0, 1] }}
          onTapStart={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut', staggerChildren: 0.5 }}
        >
          {quick.map((item) => (
            <p>{item}</p>
          ))}
          <Links>
            {link ? (
              <Link to="/projects">
                <motion.div
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: [1, 0.9] }}
                >
                  <IconGen icon="Eye" size="36px" color={colors.compBlue} />
                </motion.div>
              </Link>
            ) : (
              <a href={deploy} target="_blank" rel="noreferrer">
                <motion.div
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: [1, 0.9] }}
                >
                  <IconGen icon="Eye" size="36px" color={colors.compBlue} />
                </motion.div>
              </a>
            )}
            {git && (
              <a href={git} target="_blank" rel="noreferrer">
                <motion.div
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: [1, 0.9] }}
                >
                  <IconGen icon="Github" size="36px" color={colors.primary} />
                </motion.div>
              </a>
            )}
          </Links>
        </Overlay>
        <img src={img} alt="" />
      </ImgDiv>
      <Link to="/projects">
        <TextDiv>
          <TextTag>
            <p>{tag}</p>
          </TextTag>
          <h4>{title}</h4>
        </TextDiv>
      </Link>
    </Project>
  )
}

export default ProjectBox

const Project = styled(motion.div)`
  border-radius: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 1.6rem;
  overflow: hidden;
`

const ImgDiv = styled.div`
  position: relative;
  width: 100%;
  height: min-content;
  img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 1.2rem 1.2rem 1.2rem 1.2rem;
    object-fit: cover;
    top: 0;
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
  }
`
const TextTag = styled.div`
  z-index: 15;
  position: absolute;
  background: white;
  top: -2rem;
  padding-top: 0.5rem;
  padding-inline: 2rem;
  border-radius: 1.2rem 1.2rem 0 0;

  display: flex;
  justify-content: center;

  p {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${colors.compBlue};
  }
`

const Overlay = styled(motion.div)`
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(254, 150, 34, 0.95);
  border-radius: 1.2rem 1.2rem 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.4rem;
    color: white;
    font-weight: 600;
    text-align: center;
  }
`

const Links = styled.div`
  width: 25%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  a {
    cursor: pointer;

    svg {
      background: white;
      padding: 0.4rem;
      border-radius: 50%;
    }
  }

  a:nth-child(2) {
    margin-left: 2rem;
  }
`
