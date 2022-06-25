export class Todo {
  static reconstruirClase({ tarea, id, completado, fecha }) {
    const todoTemp = new Todo(tarea);
    todoTemp.id = id;
    todoTemp.completado = completado;
    todoTemp.fecha = fecha;

    return todoTemp;
  }

  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime();
    this.fecha = new Date();
    this.completado = false;
  }
}
