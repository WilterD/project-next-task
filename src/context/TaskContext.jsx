import { createContext } from "react";

export const TaskContext = createContext();

export const useTask = () => {
    
}

// cualquier componente que nos pasen Hijo de TaskContext puede acceder a este contexto
export const TaskProvider = ({ children }) => {

    let hello = "hello";

  return (
    // devolver un componente
    <TaskContext.Provider value={{hello}}>{children}</TaskContext.Provider>
  );
};
