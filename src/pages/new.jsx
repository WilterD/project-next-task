import React from 'react'
import Layouts from '../Components/Layouts'

const TaskFormPage = () => {
  return (
    <Layouts>
        <form>
        <h1>agregar una nueva tarea</h1>
        <input type="text" placeholder="escribe algo" ></input><br/>
        <textarea placeholder="escribe algo"></textarea>
        <br/>
        <button>Guardar</button>
        </form>
    </Layouts>
  )
}

export default TaskFormPage