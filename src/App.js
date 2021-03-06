import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// mes pages
import Home from './pages/Home';
import About from './components/About';
import Competences from './components/Competences';
import Galerie from './components/Galerie';
import Contact from './components/Contact';


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