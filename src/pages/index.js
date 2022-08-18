import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

const Home = () => {
  const { hello } = useContext(TaskContext);

  console.log(hello);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
