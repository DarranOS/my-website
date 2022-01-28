import Home from './layout/Home'
import Contact from './layout/Contact'
import NavMenu from './layout/NavMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detail from './components/Detail'
import data from './assets/data/projectData'
import styled from 'styled-components'
import './App.scss'
import ProjectSlider from './components/ProjectSlider'

function App() {
  return (
    <Container className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <ProjectSlider />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          <Home />
        </Switch>
      </Router>
    </Container>
  )
}

export default App

const Container = styled.div``
