import { useTask } from "../context/TaskContext";

const Home = () => {
  const { hello } = useTask();

  console.log(hello);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
