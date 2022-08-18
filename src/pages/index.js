import Layouts from "../Components/Layouts";
import { useTask } from "../context/TaskContext";

const Home = () => {
  const { tasks } = useTask();

  // console.log(tasks);

  return (
      <Layouts>
        <div>
      <h1 className="bg-red">Home</h1>
      </div>
      </Layouts>
  );
};

export default Home;
