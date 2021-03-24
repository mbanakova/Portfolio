import React from "react";
import "./NeuMorphBtn.scss";

function NeuMorphBtn() {
  return (
    <article class="samples__sample confirm">
      <h3 className="section__title">Neumorphism radio buttons</h3>
      <div className="confirm__wrapper">
        <label class="confirm__label">
          <input class="confirm__input" type="radio" name="continue" />
          <i class="fa fa-check" aria-hidden="true"></i>
        </label>
        <label class="confirm__label">
          <input class="confirm__input" type="radio" name="continue" />
          <i class="fa fa-times" aria-hidden="true"></i>
        </label>
      </div>
    </article>
  );
}

export default NeuMorphBtn;
