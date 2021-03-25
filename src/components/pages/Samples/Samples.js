import React from "react";
import GlassBtn from "./GlassBtn/GlassBtn";
import GlassCards from "./GlassCards/GlassCards";
import GradientBorder from "./GradientBorder/GradientBorder";
import NeuMorphBtn from "./NeuMorphBtn/NeuMorphBtn";
import "./Samples.scss";
import SlidingRadioBtn from "./SlidingRadioBtn/SlidingRadioBtn";

function Samples() {
  return (
    <section className="samples">
      <div className="samples__container container">
        <GlassBtn />
        <NeuMorphBtn />
        <SlidingRadioBtn />
        <GradientBorder />
        <GlassCards />
      </div>
    </section>
  );
}

export default Samples;
