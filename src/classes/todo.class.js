export class Todo {
  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime();
    this.fecha = new Date();
    this.completado = false;
  }
}
