import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import {useTask} from '../context/TaskContext';



const Layouts = ({ children }) => {
  const router = useRouter();

  const {tasks} = useTask(); // importar arreglo de tasks desde el contexto

  return (
    <div>
      <header>
        <Link href="/">
          <a>
            <h1 className="bg-orange-900">Task App</h1>
          </a>
        </Link>
          <span>{tasks.length} tareas</span>
        <div>
          <button
            className="bg-green-300 py-10"
            onClick={() => {
              router.push("/new");
            }}
          >
            agregar tarea <FaPlusCircle />{" "}
          </button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layouts;
