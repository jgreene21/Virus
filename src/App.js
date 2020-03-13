import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import { Button, Container, } from "semantic-ui-react";
import Home from './Components/Home'
import About from './Components/About'
import Virus from './Components/Virus'
import Error from './Components/Error'
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
       <Navbar/>
      <Container>
       
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Virus' component={Virus}/>
          <Route component={Error}/>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
