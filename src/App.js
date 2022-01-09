import Home from "./layout/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import data from "./assets/data/projectData";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/detail1">
            <Detail info={data[0]} />
          </Route>
          <Route path="/detail2">
            <Detail info={data[1]} />
          </Route>
          <Route path="/detail3">
            <Detail info={data[2]} />
          </Route>
          <Route path="/detail4">
            <Detail info={data[3]} />
          </Route>
          <Route path="/detail5">
            <Detail info={data[4]} />
          </Route>
          <Route path="/detail6">
            <Detail info={data[5]} />
          </Route>
          <Route path="/detail7">
            <Detail info={data[6]} />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
