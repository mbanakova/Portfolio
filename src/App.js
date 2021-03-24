import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Skills from "./components/pages/Skills/Skills";
import Sertificates from "./components/pages/Sertificates/Sertificates";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Carousel from "./components/pages/Carousel/Carousel";
import Samples from "./components/pages/Samples/Samples";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/portfolio/" exact component={Home} />
        <Route path="/portfolio/skills" exact component={Skills} />
        <Route path="/portfolio/sertificates" exact component={Sertificates} />
        <Route path="/portfolio/projects" exact component={Carousel} />
        <Route path="/portfolio/samples" exact component={Samples} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
