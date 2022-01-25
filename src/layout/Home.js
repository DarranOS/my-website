import styled from 'styled-components'
import colors from '../styles/Colors'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ViewProjects from './ViewProjects'

const Home = () => {
  return (
    <Container>
      <Welcome />
      <AboutMe />
      <Skills />
      <ViewProjects textColor={colors.white} />
    </Container>
  )
}

export default Home

const Container = styled.div``
