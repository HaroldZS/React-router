import React from "react";
import "./css/homepage.css";
// import logo from "./img/react-router.svg";

function HomePage() {
  return (
    <div className="container">
      <h1>HomePage</h1>
      <p>
        Hola, bienvenido a mi primer blogpost con React-Router-Dom. Podrás ver
        los diferentes posts de varios usuarios, crear tus propios posts,
        eliminarlos y actualizarlos.
      </p>
      <br></br>
      <p>¡Disfruta, esperamos tus comentarios!</p>
      
    </div>
  );
}

export { HomePage };
