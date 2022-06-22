// Esta constante referencia al div donde se encuentran mi lista completa de tareas
const divTodoHtml = document.querySelector(".todo-list");

export const crearTareaEnHtml = (tarea) => {
  //Esta constante almacena los datos interpolados que vienen de mi clase Todo e inserta
  //cada dato dentro de la estructura HTML de una tarea nueva
  const tareaHtml = `
  <li class="${tarea.completado}" data-id="${tarea.id}">
    <div class="view">
      <input class="toggle" type="checkbox" checked>
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
  divTodoHtml.append(divTarea);

  return divTarea;
};
