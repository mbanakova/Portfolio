import React from "react";
import "./SlidingRadioBtn.scss";

function SlidingRadioBtn() {
  return (
    <article class="samples__sample slide">
      <h3 className="section__title">Sliding radio button</h3>
      <label>
        <input type="radio" name="button" checked />
      </label>
      <label>
        <input type="radio" name="button" />
      </label>
    </article>
  );
}

export default SlidingRadioBtn;
