import { Todo } from "./todo.class.js";

export class TodoList {
  // Este constructor inicializa un array con todas nuestras tareas
  constructor() {
    this.cargarLocalStorage();
  }

  // Dentro de esta clase definimos todos los métodos relacionados con el manejo del
  // array de tareas que estamos creando en el constructor

  nuevoTodo(tarea) {
    this.todos.push(tarea);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    const tareaSeleccionada = this.todos.find((todo) => id == todo.id);
    const index = this.todos.indexOf(tareaSeleccionada);
    this.todos.splice(index, 1);
    this.guardarLocalStorage();
  }

  marcarCompleto(id) {
    this.todos.find((todo) => {
      if (todo.id == id) {
        todo.completado = !todo.completado;
      }
    });
    this.guardarLocalStorage();
  }

  eliminarCompletos() {
    this.todos = this.todos.filter((todo) => !todo.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.todos));
    this.obtenerCantPendientes();
  }

  cargarLocalStorage() {
    this.todos = localStorage.getItem("todo")
      ? (this.todos = JSON.parse(localStorage.getItem("todo")))
      : [];

    this.todos = this.todos.map((obj) => Todo.reconstruirClase(obj));
    this.obtenerCantPendientes();
  }

  obtenerCantPendientes() {
    const lista = this.todos;
    const pendientes = lista.filter((tarea) => tarea.completado == false);
    const cantPendientes = pendientes.length;
    return cantPendientes;
  }
}
