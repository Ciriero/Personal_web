import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs"
import { HeroCenter, HeroContainer, HeroSocial, BtnDark } from "../styles/Hero.styles";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = ({ theme, setTheme }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const changeTheme = () => {
    if (theme === "lg") {
      setTheme("dark");
    } else {
      setTheme("lg");
    }
  };
  return (
    <HeroContainer id="inicio">
      <HeroCenter>
        <article className="hero-info" data-aos="fade-right">
          <div className="underline"></div>
          <h1>Hola</h1>
          <h4>React Frontend Developer</h4>
          <button className="btn">¡Escríbeme!</button>
          <HeroSocial>
            <a href="https://www.linkedin.com/in/ciriero/" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Ciriero" target="_blank">
              <ImGithub />
            </a>
          </HeroSocial>
          <BtnDark onClick={()=> changeTheme()} className="btn-dark">{theme === "lg" ? <BsFillMoonFill /> : <BsFillSunFill />}</BtnDark>
        </article>
        <article className="hero-img" data-aos="fade-left">
          <img src="../../../utils/ccc1.jpg" alt="" className="hero-photo" />
        </article>
        
      </HeroCenter>
    </HeroContainer>
  );
};

export default Hero;
