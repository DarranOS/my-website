import styled from 'styled-components'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ContactMe from './ContactMe'

const Home = () => {
  return (
    <Container>
      <Welcome />
      <AboutMe />
      <Skills />
      <ContactMe />
    </Container>
  )
}

export default Home

const Container = styled.div``
