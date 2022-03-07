import styled from 'styled-components'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ContactMe from './ContactMe'
import Footer from '../container/Footer/Footer'

const Home = () => {
  return (
    <Container>
      <Welcome />
      <AboutMe />
      <Skills />
      {/* <ContactMe /> */}
      <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div``
