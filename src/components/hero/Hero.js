// Hero.js
import React from 'react';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import logo from '../../media/logo.svg';
import './hero.css';

const Hero = ({ pageTitle, breadcrumbs }) => {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <img src={logo} alt="Logo" />
        <h1>{pageTitle}</h1>
        <Breadcrumbs items={breadcrumbs} />
      </div>
    </div>
  );
};

export default Hero;
