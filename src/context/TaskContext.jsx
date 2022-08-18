import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

// cualquier componente que nos pasen Hijo de TaskContext puede acceder a este contexto
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: "1", nombre: "tarea 1", description: "todo bien" },
    { id: "2", nombre: "tarea 2", description: "todo bien" },
  ]);

  return (
    // devolver un componente
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
