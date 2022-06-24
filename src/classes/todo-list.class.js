import { listaDeTareas } from "..";

export class TodoList {
  // Este constructor inicializa un array con todas nuestras tareas
  constructor() {
    this.todos = [];
  }

  // Dentro de esta clase definimos todos los métodos relacionados con el manejo del
  // array de tareas que estamos creando en el constructor

  nuevoTodo(tarea) {
    this.todos.push(tarea);
  }

  eliminarTodo(id) {
    const tareaSeleccionada = this.todos.find((todo) => id == todo.id);
    const index = this.todos.indexOf(tareaSeleccionada);
    this.todos.splice(index, 1);
  }

  marcarCompleto(id) {
    this.todos.find((todo) => {
      if (todo.id == id) {
        todo.completado = !todo.completado;
      }
    });
  }

  eliminarCompletos() {
    this.todos = this.todos.filter((todo) => {
      !todo.completado;
    });
  }

  cargarLocalStorage() {}

  guardarLocalStorage() {}
}
