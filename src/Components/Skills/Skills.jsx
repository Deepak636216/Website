import React from 'react';
import "./Skills.css";

const Skills = () => {
  return (
    <section className="service container section" id="services">
        <h2 className='section_title'>Skills</h2>
        <ul className='skills_list'>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-python"></i>
                    <span className='icon_title'>Python</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-linux"></i>
                    <span className='icon_title'>Linux</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <div className='icon_group'>
                        <i className="fa-solid fa-c"></i>
                        <i className="fa-solid fa-plus"></i>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <span className='icon_title'>C++</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-java"></i>
                    <span className='icon_title'>Java</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-js"></i>
                    <span className='icon_title'>JavaScript</span>
                </a>
            </li>
        </ul>
        <ul className='skills_list'>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-react"></i>
                    <span className='icon_title'>React</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-brands fa-node-js"></i>
                    <span className='icon_title'>Node.js</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-solid fa-database"></i>
                    <span className='icon_title'>Database</span>
                </a>
            </li>
            <li className='skill_item'>
                <a href="" className='nav_link'>
                    <i className="fa-solid fa-chart-bar"></i>
                    <span className='icon_title'>Data Analysis</span>
                </a>
            </li>
        </ul>
    </section>
  );
};

export default Skills;
