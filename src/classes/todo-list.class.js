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

  eliminarTodo(id) {}

  marcarCompleto(id) {}

  eliminarCompletos() {}
}
