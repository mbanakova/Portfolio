import React from "react";
import "./GradientBorder.scss";

function GradientBorder() {
  return (
    <article class="samples__sample gradient">
      <h3 className="section__title">Gradient border</h3>
      <ul className="gradient__list">
        <li className="gradient__border">
          <div className="gradient__content">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              fuga!
            </p>
          </div>
        </li>
        <li className="gradient__border">
          <div className="gradient__content">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              fuga!
            </p>
          </div>
        </li>
        <li className="gradient__border">
          <div className="gradient__content">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
              fuga!
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default GradientBorder;
