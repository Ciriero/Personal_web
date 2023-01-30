import React, { useEffect, useRef, useState } from "react";
import { WrapperForm, FormCenter, FormInfo } from "../styles/Form.styles";
import swal from "sweetalert";
import ErrorForm from "./ErrorForm";
import emailsv from "../img/email.svg";
import load from "../img/load2.gif"
import emailjs from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [emailError, setEmailError] = useState();
  const [modalStatus, setModalStatus] = useState(false);
  const [contentModal, setContentModal] = useState("");
  const [permanentModal, setPermanentModal] = useState(contentModal);
  const [send, setSend] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    validateEmail({ email, setEmailError });
  }, [email]);

  const handleClic = (e) => {
    e.preventDefault();
    setSend(true)
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      text.trim().length === 0
    ) {
      swal("Cumplimenta todos los campos, por favor");
      setSend(false);
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_USERI_ID
        )
        .then(
          (result) => {
            swal(
              `¡Gracias, ${name}!`,
              "Te responderé lo antes posible",
              "success"
            );
            setEmail("");
            setText("");
            setName("");
            setSend(false);
          },
          (error) => {
            swal("Lo siento, tu mensaje no se ha podido enviar");
            e.target.reset();
            setSend(false);
          }
        );
    }
  };

  const validateEmail = ({ email, setEmailError }) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return email && !email.match(regex)
      ? setEmailError("Email sin formato válido")
      : setEmailError("");
  };

  const closeModal = () => {
    setModalStatus(false);
    // setContentModal("");
    setPermanentModal(contentModal);
  };

  return (
    <WrapperForm id="contact">
      <div className="form-title">
        <h2 data-aos="fade-in">Contacto</h2>
        <div className="underline udl"></div>
      </div>
      <FormCenter>
        <article className="form-img">
          <img src={emailsv} alt="form" className="form-photo" />
        </article>
        <FormInfo className="form-info">
          <form onSubmit={handleClic} ref={formRef}>
            <label htmlFor="name" className="label-name">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-name"
              placeholder="Nombre"
            />
            <label htmlFor="email" className="label-email">
              Email
              {emailError && <ErrorForm error={emailError} />}
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="input-text"
              placeholder="Escribe..."
            ></textarea>
            <button className="btn btn-form">{!send ? "Enviar" : <img src={load} alt="image not responding" />}</button>
          </form>
        </FormInfo>
      </FormCenter>
    </WrapperForm>
  );
};

export default Form;
