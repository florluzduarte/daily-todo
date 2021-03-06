// Esta constante referencia al div donde se encuentran mi lista completa de tareas
import { Todo } from "../classes/index.class.js";
import { listaDeTareas } from "../index.js";

//Referencias al HTML
const divTodoHtml = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnBorrarCompletos = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");
const anchorFiltro = document.querySelectorAll(".filtro");
const contadorPendientes = document.querySelector(".todo-count").childNodes[0];

export const crearTareaEnHtml = (tarea) => {
  //Esta constante almacena los datos interpolados que vienen de mi clase Todo e inserta
  //cada dato dentro de la estructura HTML de una tarea nueva
  const tareaHtml = `
  <li class="${tarea.completado ? "completed" : ""}" data-id="${tarea.id}">
    <div class="view">
      <input class="toggle" type="checkbox" ${
        tarea.completado ? "checked" : ""
      }>
      <label>${tarea.tarea}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
  </li>`;

  //Por el momento creamos un div para cada tarea, como una forma fácil de referenciar
  //el DOM para luego poder modificar los elementos HTML dentro de ese div y generar así cada tareaHtml
  const divTarea = document.createElement("div");
  divTarea.innerHTML = tareaHtml;

  //De esta forma insertamos la tarea nueva en la lista de tareas que definimos al inicio
  //Luego esta funcionalidad estará separada en otra función
  divTodoHtml.append(divTarea.firstElementChild);

  return divTarea.firstElementChild;
};

// Eventos

// Evento input de nuevas tareas
txtInput.addEventListener("keyup", (event) => {
  //Este if evalúa si al escribir en el input, la última tecla presionada es el enter
  // keyCode: 13 equiavale al enter. Cada tecla tiene su keycode, y esa info se guarda en el evento
  // que estamos escuchando. Por otro lado, también evalúa e impide que haya inputs sin texto.
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const tarea = new Todo(txtInput.value);
    listaDeTareas.nuevoTodo(tarea);
    crearTareaEnHtml(tarea);
    //Igualar el value a un string vacío equivale a borrar lo que escribimos en el input al dar enter
    txtInput.value = "";
  }
  contadorPendientes.innerText = listaDeTareas.obtenerCantPendientes();
});

// Evento ckeckbox completo / incompleto

divTodoHtml.addEventListener("click", (event) => {
  //Esto determina si el lugar donde estoy clickeando es de tipo input (checkbox), button (cross) o label (tarea)
  const tipoDeElemento = event.target.localName;
  // Esta constante selecciona todo el elemento todo, es decir todo el <li> que se genera cada vez
  // que escribimos una nueva tarea en la app
  const todoElemento = event.target.parentElement.parentElement;
  // Esta constante almacena el ID que tiene cada tarea. Estos datos los extrae del <li> que se genera
  // cada vez que escribimos una nueva tarea en la app, que además hace referencia a la clase Todo.
  // Lo nuevo de esto es que lo selecciona por un atributo de HTML, en este caso el "data-id".
  const todoId = todoElemento.getAttribute("data-id");

  if (tipoDeElemento.includes("input")) {
    listaDeTareas.marcarCompleto(todoId);
    todoElemento.classList.toggle("completed");
  }

  if (tipoDeElemento.includes("button")) {
    listaDeTareas.eliminarTodo(todoId);
    todoElemento.remove(todoId);
  }
  contadorPendientes.innerText = listaDeTareas.obtenerCantPendientes();
});

// Evento botón borrar completos

btnBorrarCompletos.addEventListener("click", () => {
  listaDeTareas.eliminarCompletos();
  for (let i = divTodoHtml.children.length - 1; i >= 0; i--) {
    const elemento = divTodoHtml.children[i];
    if (elemento.classList.contains("completed")) {
      divTodoHtml.removeChild(elemento);
    }
  }
});

// Eventos para filtros

ulFiltros.addEventListener("click", (event) => {
  const textoSeleccionado = event.target.text;
  if (!textoSeleccionado) {
    return;
  }
  console.log(contadorPendientes);

  anchorFiltro.forEach((elem) => {
    elem.classList.remove("selected");
  });

  event.target.classList.add("selected");

  for (const elemento of divTodoHtml.children) {
    elemento.classList.remove("hidden");
    const completo = elemento.classList.contains("completed");

    switch (textoSeleccionado) {
      case "Pendientes":
        if (completo) {
          elemento.classList.add("hidden");
        }
        break;

      case "Completos":
        if (!completo) {
          elemento.classList.add("hidden");
        }
        break;
    }
  }
});

window.addEventListener("load", () => {
  contadorPendientes.innerText = listaDeTareas.obtenerCantPendientes();
});
