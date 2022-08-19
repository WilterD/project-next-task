import Layouts from "../Components/Layouts";
import { useTask } from "../context/TaskContext";

const Home = () => {
  const { tasks } = useTask();

  return (
    <Layouts>
      {tasks.length === 0 ? (
        <h2>No hay tareas disponibles</h2>
      ) : (
        <div>
          {tasks.map((task, i) => (
            <div className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between">
              <span>{i}</span>
              <div>
              <h1>{task.titulo}</h1>
              <button className="bg-red-500 rounded-xl p-2 text-white">Borrar</button>
              <p className="text-gray-300">{task.descripcion}</p>
              </div>
              {/* <span className="text-gray-400">{task.id}</span> */}
            </div>
          ))}
        </div>
      )}
    </Layouts>
  );
};

export default Home;
