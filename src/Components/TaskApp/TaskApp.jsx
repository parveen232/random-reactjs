import { useState } from "react";
import AddTask from "./AddTask";

export default function TaskApp() {
  const [task, setTask] = useState();
  const [taskArray, setTaskArray] = useState([]);

  return (
    <div className="task-app">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTaskArray((item) => [...item, task]);
          setTask('')
        }}
      >
        <input
          type="text"
          name="task-input"
          id="task-text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          onSubmit={(e) => {
            console.log(e.target.value);
          }}
          className='ta-btn btn'
        >
          Add
        </button>
      </form>
      <AddTask taskArray={taskArray} />
    </div>
  );
}
