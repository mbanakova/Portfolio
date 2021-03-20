import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Skills from './components/pages/Skills/Skills';
import Sertificates from './components/pages/Sertificates/Sertificates';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home'
import Carousel from './components/pages/Carousel/Carousel';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/sertificates' exact component={Sertificates} />
        <Route path='/projects' exact component={Carousel} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
