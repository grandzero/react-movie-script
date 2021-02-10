import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Movie from './components/movie';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Navbar>
        
      </Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:movieID" exact component={Movie} />
        </Switch>
    </Router>
  );
}

export default App;
