import { Home } from 'pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import './App.scss'
// import ProjectSlider from './components/ProjectSlider'
// import Illustration from './components/illustration/Illustration'

function App() {
  return (
    <Container className="App">
      <Router>
        <Switch>
          {/* <Route path="/projects">
            <ProjectSlider />
          </Route> */}
          {/* <Route path="/illustration">
            <Illustration />
          </Route> */}

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
