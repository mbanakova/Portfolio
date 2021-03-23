import React from "react";
import Intro from "../Intro/Intro";
import { intro } from "../Intro/Data";
import Carousel from "../Carousel/Carousel";
import Skills from "../Skills/Skills";
import Sertificates from "../Sertificates/Sertificates";

function Home() {
  return (
    <>
      <Intro {...intro} />
      <Skills />
      <Sertificates />
      <Carousel />
    </>
  );
}

export default Home;
