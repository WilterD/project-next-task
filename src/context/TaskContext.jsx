import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTask = () => {
   const context = useContext(TaskContext);
    return context;
}

// cualquier componente que nos pasen Hijo de TaskContext puede acceder a este contexto
export const TaskProvider = ({ children }) => {

    let hello = "cosas";

  return (
    // devolver un componente
    <TaskContext.Provider value={{hello}}>{children}</TaskContext.Provider>
  );
};
