import React from "react";
import Layouts from "../Components/Layouts";
import { useTask } from "../context/TaskContext";

import { useState } from "react";

const TaskFormPage = () => {
  const { createTask } = useTask(); // importar funcion desde el contexto

  const [task, setTask] = useState({ // actualizar estado de valores de tareas
    titulo: "",
    descripcion: "",
  });

  const handleSubmit = (e) => { // al presionar el boton guardar
    e.preventDefault();
    console.log("enviando");
  };
  const handleChange = (e) => { // al tipear hacer
    const { name, value } = e.target; // extraer lo que tipea el usuario
    setTask({ ...task, [name]: value });
  };

  return (
    <Layouts>
      <form onSubmit={handleSubmit}>
        <h1>agregar una nueva tarea</h1>
        <input
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          type="text"
          placeholder="escribe algo"
          name="titulo"
          onChange={handleChange}
        />
        <br />
        <textarea
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          placeholder="escribe algo"
          name="descripcion"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Guardar</button>
      </form>
    </Layouts>
  );
};

export default TaskFormPage;
