import "./styles.css";
import { Todo, TodoList } from "./classes/index.class.js";
import { crearTareaEnHtml } from "./js/componentes.js";

export const listaDeTareas = new TodoList();
listaDeTareas.todos.forEach((tarea) => crearTareaEnHtml(tarea));
