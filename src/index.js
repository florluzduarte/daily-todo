import "./styles.css";
import { Todo, TodoList } from "./classes/index.class.js";
import { crearTareaEnHtml } from "./js/componentes.js";

const tarea = new Todo("Aprender Javascript");
const listaDeTareas = new TodoList();
listaDeTareas.nuevoTodo(tarea);
crearTareaEnHtml(tarea);
console.log(listaDeTareas);
