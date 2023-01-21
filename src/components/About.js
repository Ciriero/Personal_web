import React from "react";
import CV from "../assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { WrapperAbout } from "../styles/About.styles";

const About = () => {
  return (
    <WrapperAbout>
      <section className="section about">
        <div className="section-center about-center">
          <article className="about-img">
            <img
              src="../../../utils/Foto0209-2.jpg"
              alt=""
              className="about-photo"
            />
          </article>
          <article className="about-info">
            <div className="section-title about-title">
              <h2>About</h2>
              <div className="underline"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum iusto inventore, esse dolor cumque eos pariatur, id
                repellat enim animi fugiat, eaque natus expedita distinctio
                fuga. Ipsum vero cum dignissimos corrupti dolorum porro expedita
                quidem cupiditate, neque aliquam. Dignissimos, veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                reprehenderit asperiores necessitatibus nostrum quod fugiat,
                facilis iste dolore maiores perspiciatis quaerat ut illo alias,
                quia quisquam porro deserunt illum explicabo sequi sapiente
                minus pariatur magnam iure. Minima ea alias inventore.
              </p>
            </div>

            <a href={CV} download className="hero-btn">
              Descargar CV <AiOutlineDownload />
            </a>
          </article>
        </div>
      </section>
    </WrapperAbout>
  );
};

export default About;
