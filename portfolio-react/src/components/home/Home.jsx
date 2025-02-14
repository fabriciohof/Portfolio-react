import React from 'react';
import "./home.css";
import eu from "../../assets/eu2.jpg";
import Socials from './Socials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';


const home = () => {
  return (
    <section className='home container' id='home'>
      <div className="intro">
        <img src={eu} alt="" className="home-img" />
        <h1 className="home-name">Fabrício Formentini</h1>
        <span className="home-education">Futuro desenvolvedor web</span>

        <Socials />

        <a href="#contact" className="btn">Contate-me</a>

      <ScrollDown />

      </div>  

      <Shapes />
      
    </section> 

  )
}

export default home