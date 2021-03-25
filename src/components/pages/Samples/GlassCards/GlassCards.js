import React from "react";
import "./GlassCards.scss";

function GlassCards() {
  return (
    <article class="samples__sample glass">
      <h3 className="section__title">Glass cards</h3>
      <ul className="glass__list">
        <li className="glass__item">
          <span className="glass__span"></span>
          <div className="glass__content">
            <h3 className="glass__header">Lorem ipsum</h3>
            <p className="glass__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              placeat consequatur quis voluptate distinctio.
            </p>
          </div>
        </li>
        <li className="glass__item">
          <span className="glass__span"></span>
          <div className="glass__content">
            <h3 className="glass__header">Lorem ipsum</h3>
            <p className="glass__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              placeat consequatur quis voluptate distinctio.
            </p>
          </div>
        </li>
        <li className="glass__item">
          <span className="glass__span"></span>
          <div className="glass__content">
            <h3 className="glass__header">Lorem ipsum</h3>
            <p className="glass__text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              placeat consequatur quis voluptate distinctio.
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default GlassCards;
