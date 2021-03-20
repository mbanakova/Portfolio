import React, { useState } from 'react';
import styled from 'styled-components';
import './Sertificates.scss';
import { Data } from './Data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

function Sertificates() {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }
    const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: rgb(31, 31, 34);
    width: 100%;
    `;

    const Wrap = styled.div`
    background-color: rgb(31, 31, 34);
    box-shadow: -2px -2px 6px rgba(255, 255, 255, .1),
    4px 4px 12px rgba(0, 0, 0, .8);
    color:rgba(255, 255, 255, .1);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    color: #6ee6fc;
    `;

    const Dropdown = styled.div`
    background-color: rgb(31, 31, 34);
    box-shadow: -1px -1px 3px rgba(255, 255, 255, .1),
    2px 2px 6px rgba(0, 0, 0, .8),
    inset -2px -2px 10px rgba(255, 255, 255, .05),
    inset 2px 2px 10px rgba(0, 0, 0, .5);
    color:rgba(255, 255, 255, .1);
    width: 100%;
    padding: 30px;
    color: #ffffff;`


    return (
        <section className="accordion">
            <div className="accordion__container">
                <h2 className="accordion__title">Sertificates</h2>
                <IconContext.Provider value={{ color: '#6ee6fc', size: '25px' }}>
                    <AccordionSection>
                            {Data.map((item, index) => {
                                return (
                                    <>
                                        <Wrap onClick={() => toggle(index)} key={index}>
                                            <h3 className="accordion__header">{item.school}</h3>
                                            <span className="accordion__toggle">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                        </Wrap>
                                        {clicked === index ? (
                                            <Dropdown>
                                                <ul className="accordion__text">{item.courses.map((course) => {
                                                    return <li className="accordion__course"><a className="accordion__link" href={course.link}>{course.title}</a></li>
                                                })}</ul>
                                            </Dropdown>
                                        ) : null}
                                    </>
                                )
                            })}
                    </AccordionSection>
                </IconContext.Provider>
            </div>
        </section>
    )
}

export default Sertificates
