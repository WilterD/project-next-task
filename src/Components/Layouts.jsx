import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTask } from "../context/TaskContext";

const Layouts = ({ children }) => {
  const router = useRouter();

  const { tasks } = useTask(); // importar arreglo de tasks desde el contexto

  return (
      <div ClassName="h-screen bg-gray-900 text-white">
        <header ClassName="flex bg-gray-800 px-28 py-5">
          <Link href="/">
            <a>
              <h1 ClassName="font-black text-lg">Task App</h1>
            </a>
          </Link>
          <span>{tasks.length}</span>
          <div ClassName="flex-grow text-right">
            <button
              ClassName="bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded-sm inline-flex items-center"
              onClick={() => {
                router.push("/new");
              }}
            >
              Agregar tarea <FaPlusCircle ClassName="ml-2" />{" "}
            </button>
          </div>
        </header>
        <main ClassName="px-28">{children}</main>
      </div>
  );
};

export default Layouts;
