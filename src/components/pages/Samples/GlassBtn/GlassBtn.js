import React from "react";
import "./GlassBtn.scss";

function GlassBtn() {
  return (
    <article className="samples__sample glow">
      <h3 className="section__title">Glass checkbox buttons</h3>
      <ul className="glow__list">
        <li className="glow__item">
          <label className="glow__label">
            <input type="checkbox" name="glow" />
            <div className="glow__icon">
              <i className="fa fa-flask" aria-hidden="true"></i>
            </div>
          </label>
        </li>
        <li className="glow__item">
          <label className="glow__label">
            <input type="checkbox" name="glow" />
            <div className="glow__icon">
              <i className="fa fa-medkit" aria-hidden="true"></i>
            </div>
          </label>
        </li>
        <li className="glow__item">
          <label className="glow__label">
            <input type="checkbox" name="glow" />
            <div className="glow__icon">
              <i className="fa fa-balance-scale" aria-hidden="true"></i>
            </div>
          </label>
        </li>
        <li className="glow__item">
          <label className="glow__label">
            <input type="checkbox" name="glow" />
            <div className="glow__icon">
              <i
                className="fa fa-thermometer-three-quarters"
                aria-hidden="true"
              ></i>
            </div>
          </label>
        </li>
      </ul>
    </article>
  );
}

export default GlassBtn;
