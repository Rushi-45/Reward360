import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/base_components/Home'
import About from './components/base_components/AboutMe'
import Navbar1 from './components/base_components/Navbar1'
import Navbar from './components/base_components/Navbar'


function App() {

  return (
    <Router>     
      <Navbar1 />
      {/* <Navbar /> */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
     
    </Router>
  );
}

export default App;