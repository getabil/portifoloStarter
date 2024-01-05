// src/components/AboutMe.js
import React, { useState, useEffect } from 'react';
import { FaReact,  FaPhp, FaJs, FaJava, FaBrain, FaGit } from 'react-icons/fa';
import { css } from '@emotion/react';
import { BarLoader } from 'react-spinners';
import { DiDjango } from "react-icons/di";
import { SiMui } from "react-icons/si";
const AboutMe = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const override = css`
    display: block;
    margin: 50px auto;
  `;

  return (
    <div id="about">
      <h2>About Me</h2>
      {loading ? (
        <BarLoader color="#36D7B7" css={override} />
      ) : (
        <>
          <p>
            Hi there! I'm [Getabil mengistu], a passionate developer with expertise in the following
            technologies:
          </p>
          <h3>Skills:</h3>
          <ul>
            <li>
              <FaReact /> React
            </li>
            <li>
            <DiDjango /> Django
            </li>
            <li>
            <SiMui />Material-UI
            </li>
            <li>
              <FaPhp /> PHP
            </li>
            <li>
              <FaJs /> JavaScript
            </li>
            <li>
              <FaJava /> Java
            </li>
            <li>
              <FaBrain /> Machine Learning
            </li>
            <li>
              <FaGit /> Git
            </li>
          </ul>
          <h3>Projects:</h3>
          <p>
            During my career, I have successfully completed various projects, including:
          </p>
          <ul>
            <li>Stock Management System</li>
            <li>Aircraft Predictive Maintenance System</li>
            <li>Water Billing Management System (using PHP)</li>
            <li>Human Resource Management System (built with Django and React)</li>
          </ul>
          <p>
            These projects showcase my ability to work on diverse technologies and deliver solutions
            that meet business requirements.
          </p>
          {/* You can add more information about yourself, your education, and any other relevant details */}
        </>
      )}
    </div>
  );
};

export default AboutMe;
