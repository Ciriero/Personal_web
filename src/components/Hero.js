import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { HeroButton, HeroCenter, HeroContainer, HeroSocial } from '../styles/Hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
    <HeroCenter>
      <article className="hero-info">
        <div className="underline"></div>
        <h1>Hola</h1>
        <h4>React Frontend Developer</h4>
        <HeroButton>¡Escríbeme!</HeroButton>
        <HeroSocial>
          <FaLinkedin />
          <ImGithub />
        </HeroSocial>
      </article>
      <article className="hero-img">
        <img
          src="../../../utils/ccc1.jpg"
          alt=""
          className="hero-photo"
        />
      </article>
    </HeroCenter>
  </HeroContainer>
  )
}

export default Hero