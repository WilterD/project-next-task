import { createContext, useContext, useState } from "react";
// importar funciones, crear contexto, uso del contexto y cambios de estado

export const TaskContext = createContext(); // creacion del contexto global

export const useTask = () => useContext(TaskContext); // funcion para usar el contexto en cada componente hijo

// cualquier componente Hijo de TaskContext puede acceder a este contexto, enviando su children
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    // arreglo de tareas y funcion para actualizarlo
    { id: "1", titulo: "tarea 1", descripcion: "todo bien" },
    { id: "2", titulo: "tarea 2", descripcion: "todo bien" },
  ]);

  const createTask = (titulo, descripcion) => {
    setTasks([...tasks, { titulo, descripcion, id: tasks.length + 1 }]);
  };

  return (
    // devolver un componente u funcion que se pueda usar en cualquier componente que nos pasen hijo de TaskContext
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
