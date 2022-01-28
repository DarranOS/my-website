import styled from 'styled-components'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
import Skills from './Skills'

const Home = () => {
  return (
    <Container>
      <Welcome />
      <AboutMe />
      <Skills />
    </Container>
  )
}

export default Home

const Container = styled.div``
