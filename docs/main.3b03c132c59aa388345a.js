(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d({},{U:()=>h});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.fecha=new Date,this.completado=!1}var n,o,r;return n=e,r=[{key:"reconstruirClase",value:function(t){var n=t.tarea,o=t.id,r=t.completado,a=t.fecha,i=new e(n);return i.id=o,i.completado=r,i.fecha=a,i}}],(o=null)&&t(n.prototype,o),r&&t(n,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,r,a;return t=e,(r=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(e){var t=this.todos.find((function(t){return e==t.id})),n=this.todos.indexOf(t);this.todos.splice(n,1),this.guardarLocalStorage()}},{key:"marcarCompleto",value:function(e){this.todos.find((function(t){t.id==e&&(t.completado=!t.completado)})),this.guardarLocalStorage()}},{key:"eliminarCompletos",value:function(){this.todos=this.todos.filter((function(e){return!e.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos)),this.obtenerCantPendientes()}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?this.todos=JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(e){return n.reconstruirClase(e)})),this.obtenerCantPendientes()}},{key:"obtenerCantPendientes",value:function(){return this.todos.filter((function(e){return 0==e.completado})).length}}])&&o(t.prototype,r),a&&o(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw a}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var c=document.querySelector(".todo-list"),l=document.querySelector(".new-todo"),s=document.querySelector(".clear-completed"),d=document.querySelector(".filters"),u=document.querySelectorAll(".filtro"),f=document.querySelector(".todo-count").childNodes[0],m=function(e){var t='\n  <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n    <div class="view">\n      <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n      <label>").concat(e.tarea,'</label>\n      <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n  </li>'),n=document.createElement("div");return n.innerHTML=t,c.append(n.firstElementChild),n.firstElementChild};l.addEventListener("keyup",(function(e){if(13===e.keyCode&&l.value.length>0){var t=new n(l.value);h.nuevoTodo(t),m(t),l.value=""}f.innerText=h.obtenerCantPendientes()})),c.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,o=n.getAttribute("data-id");t.includes("input")&&(h.marcarCompleto(o),n.classList.toggle("completed")),t.includes("button")&&(h.eliminarTodo(o),n.remove(o)),f.innerText=h.obtenerCantPendientes()})),s.addEventListener("click",(function(){h.eliminarCompletos();for(var e=c.children.length-1;e>=0;e--){var t=c.children[e];t.classList.contains("completed")&&c.removeChild(t)}})),d.addEventListener("click",(function(e){var t=e.target.text;if(t){console.log(f),u.forEach((function(e){e.classList.remove("selected")})),e.target.classList.add("selected");var n,o=a(c.children);try{for(o.s();!(n=o.n()).done;){var r=n.value;r.classList.remove("hidden");var i=r.classList.contains("completed");switch(t){case"Pendientes":i&&r.classList.add("hidden");break;case"Completos":i||r.classList.add("hidden")}}}catch(e){o.e(e)}finally{o.f()}}})),window.addEventListener("load",(function(){f.innerText=h.obtenerCantPendientes()}));var h=new r;h.todos.forEach((function(e){return m(e)}))})();