import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// mes pages
import Home from './pages/Home';
import About from './pages/About';
import Competences from './pages/Competences';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/> 
          <Route path="/about" exact component={About}/> 
          <Route path="/competences" exact component={Competences}/> 
          <Route path="/galerie" exact component={Galerie}/> 
          <Route path="/contact" exact component={Contact}/> 
        </Switch>
      </BrowserRouter>
    </Fragment>
    );
}

export default App;