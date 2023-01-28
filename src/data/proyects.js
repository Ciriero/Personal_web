import carfax from "../img/carfax.png";
import food from "../img/food.jpg";
import appmusic from "../img/appmusic.jpg";
import todo from "../img/todo.jpg";
import quiz from "../img/quiz.jpg";
import web from "../img/web.jpg";
import soon from "../img/soon.jpg";

export const projects = [
  {
    id: 1,
    title: "App de Recetas",
    text: "Aplicación responsive realizada con React, context, styled-components, paginación y localstorage.",
    image: food,
  },
  {
    id: 2,
    title: "App Music",
    text: "Primera app subida a Git. React, styled-components y responsive.",
    image: appmusic,
  },
  {
    id: 3,
    title: "TODO",
    text: "CRUD completo con React, CSS y localstorage.",
    image: todo,
  },
  {
    id: 4,
    title: "Quiz Game",
    text: "Juego de preguntas y respuestas con api, React, reducers, context y CSS.",
    image: quiz,
  },
  {
    id: 5,
    title: "Carrito de compra",
    text: "Aplicación responsive realizada con React, reducers, context, styled-components y localstorage.",
    image: carfax,
  },
  {
    id: 6,
    title: "Personal Web",
    text: "Página web personal responsive con React, styled-components y un servidor con Nodejs y Express para enviar emails con nodemailer.",
    image: web,
  },
  {
    id: 7,
    title: "E-commerce",
    text: "Próximamente... e-commerce con el stack MERN: MongoDB, Express, React y Nodejs. Puedes seguir mis avances en GitHub.",
    image: soon,
  },
];
