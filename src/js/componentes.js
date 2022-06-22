// Esta constante referencia al div donde se encuentran mi lista completa de tareas
import { Todo } from "../classes/index.class.js";
import { listaDeTareas } from "../index.js";

//Referencias al HTML
const divTodoHtml = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");

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

txtInput.addEventListener("keyup", (event) => {
  //Este if evalúa si al escribir en el input, la última tecla presionada es el enter
  // keyCode: 13 equiavale al enter. Cada tecla tiene su keycode, y esa info se guarda en el evento
  // que estamos escuchando. Por otro lado, también evalúa e impide que haya inputs sin texto.
  if (event.keyCode === 13 && txtInput.value.length > 0) {
    const tarea = new Todo(txtInput.value);
    listaDeTareas.nuevoTodo(tarea);
    crearTareaEnHtml(tarea);
    console.log(listaDeTareas);
    //Igualar el value a un string vacío equivale a borrar lo que escribimos en el input al dar enter
    txtInput.value = "";
  }
});
