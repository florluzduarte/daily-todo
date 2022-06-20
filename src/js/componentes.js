import "../css/componentes.css";
// import webpackLogo from "../assets/img/webpack-logo.png";

export const saludar = (nombre) => {
  console.log("Se ejecuta la función saludar");

  const titulo = document.createElement("H1");
  titulo.innerText = `Hola, ${nombre}`;

  document.body.append(titulo);

  //img
  // const img = document.createElement("img");
  // img.src = webpackLogo;
  // document.body.append(img);
};
