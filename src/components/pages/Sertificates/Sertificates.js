import React, { useState } from "react";
import "./Sertificates.scss";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

function Sertificates() {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <section className="accordion">
      <div className="accordion__container">
        <h2 className="accordion__title">Sertificates</h2>
        <IconContext.Provider value={{ color: "#6ee6fc", size: "25px" }}>
          <ul className="accordion__list">
            {Data.map((item, index) => {
              return (
                <>
                  <li
                    className="accordion__item"
                    onClick={() => toggle(index)}
                    key={item.school}
                  >
                    <h3 className="accordion__header">{item.school}</h3>
                    <span className="accordion__toggle">
                      {clicked === index ? <FiMinus /> : <FiPlus />}
                    </span>
                  </li>
                  {clicked === index ? (
                    <ul className="accordion__text">
                      {item.courses.map(course => {
                        return (
                          <li className="accordion__course" key={course.link}>
                            <a className="accordion__link" href={course.link}>
                              {course.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </>
              );
            })}
          </ul>
        </IconContext.Provider>
      </div>
    </section>
  );
}

export default Sertificates;
