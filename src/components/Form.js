import React from "react";
import { WrapperForm, FormCenter, FormInfo } from "../styles/Form.styles";

const Form = () => {
  return (
    <WrapperForm>
      <div className="form-title">
        <h2>Contacto</h2>
        <div className="underline udl"></div>
      </div>
      <FormCenter>
        <article className="form-img">
          <img src="../../../utils/email.svg" alt="" className="form-photo" />
        </article>
        <FormInfo className="form-info">
          <form action="">
            <label htmlFor="name" className="label-name">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="input-name"
              placeholder="Nombre"
            />
            <label htmlFor="email" className="label-email">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input-email"
              placeholder="Email"
            />
            <label htmlFor="msg" className="label-text">
              Texto
            </label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="input-text"
              placeholder="Escribe..."
            ></textarea>
            <button className="btn btn-form">Enviar</button>
          </form>
        </FormInfo>
      </FormCenter>
    </WrapperForm>
  );
};

export default Form;
