import Home from './layout/Home'
import NavMenu from './layout/NavMenu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detail from './components/Detail'
import data from './assets/data/projectData'
import styled from 'styled-components'
import './App.scss'

function App() {
  return (
    <Container className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/projects-1">
            <Detail info={data[0]} />
          </Route>
          <Route path="/projects-2">
            <Detail info={data[1]} />
          </Route>
          <Route path="/projects-3">
            <Detail info={data[2]} />
          </Route>
          <Route path="/projects-4">
            <Detail info={data[3]} />
          </Route>
          <Route path="/projects-5">
            <Detail info={data[4]} />
          </Route>
          <Route path="/projects-6">
            <Detail info={data[5]} />
          </Route>
          <Route path="/projects-7">
            <Detail info={data[6]} />
          </Route>
          <Route path="/projects-8">
            <Detail info={data[7]} />
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
