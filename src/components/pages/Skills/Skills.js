import React from 'react'
import { FaCss3Alt, FaGulp, FaHtml5, FaLess, FaNpm, FaReact, FaSass } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'
import './Skills.scss'


function Skills() {
    return (
        <section className="skills">
            <div className="skills__container">
                <h2 className="skills__title">Skills</h2>
                <ul className="skills__list">
                    <li className="skills__item"><FaHtml5 style={{color: "#e43922"}} /></li>
                    <li className="skills__item"><FaCss3Alt style={{color: "#2276e4"}} /></li>
                    <li className="skills__item"><SiJavascript style={{color: "#ebd61c"}} /></li>
                    <li className="skills__item"><FaNpm style={{color: "#cb3837"}} /></li>
                    <li className="skills__item"><FaGulp style={{color: "#cf4647"}} /></li>
                    <li className="skills__item"><FaSass style={{color: "#bf4080"}} /></li>
                    <li className="skills__item"><FaLess style={{color: "#1d365d"}} /></li>
                    <li className="skills__item"><FaReact style={{color: "#61dafb"}} /></li>
                    <li className="skills__item"><img src="/images/figma.svg" alt="figma" height="80" /></li>
                    <li className="skills__item"><DiPhotoshop style={{color: "#0e2555"}} /></li>
                </ul>
            </div>
        </section>
    )
}

export default Skills
