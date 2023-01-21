import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Hero = () => {
  return (
    <section>
    <div className="animate__fadeIn">
      <article className="hero-info">
        <div className="underline"></div>
        <h1>Hola</h1>
        <h4>React Frontend Developer</h4>
        <button>¡Escríbeme!</button>
        <div>
          <FaLinkedin />
          <ImGithub />
        </div>
      </article>
      <article className="hero-img">
        <img
          src="../../../utils/ccc1.jpg"
          alt=""
          className="hero-photo"
        />
      </article>
    </div>
  </section>
  )
}

export default Hero