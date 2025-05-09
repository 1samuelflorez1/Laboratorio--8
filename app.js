// Seleccionar elementos del DOM
const ingresarTarea = document.getElementById('ingresar-tarea')
const botonAgregar = document.getElementById('boton-agregar')
const listaTareas = document.getElementById('lista-tareas')

// Obtener tareas del localStorage
function obtenerTareasLocalStorage() {
  const tareas = localStorage.getItem('tareas')
  if (tareas !== null) {
    return JSON.parse(tareas)
  } else {
    return []
  }
}

// Guardar tareas en localStorage

}

// Mostrar tareas en el DOM
function mostrarTareas() {
  
}

// Marcar tarea como completada visualmente
function completarTarea(index) {
 
}

// Eliminar tarea
function eliminarTarea(index) {
  
}

// Crear una nueva tarea
function nuevaTarea() {
  
}

// Eventos


// Mostrar tareas al cargar



