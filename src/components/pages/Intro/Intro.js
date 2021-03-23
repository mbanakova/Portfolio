import React from "react";
import Background from "../../Background";
import { Button } from "../../Button";
import "./Intro.scss";

function Intro({ title, name, description, buttonLabel, link }) {
  return (
    <>
      <div className="intro" key={link}>
        <div className="intro__bg">
          <Background />
        </div>
        <div className="intro__row">
          <div className="intro__content">
            <div className="intro__card">
              <div className="intro__card-title">{title}</div>
              <h1 className="intro__card-name">{name}</h1>
              <p className="intro__card-description">{description}</p>
              <a className="intro__cv" href={link}>
                <Button buttonSize="btn--wide">{buttonLabel}</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
