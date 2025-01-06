import { useState } from "react";
const To_do = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };
  const deleteTasks = () => {
    setTaskList([]);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value); // Update the task state
        }}
      />
      <button onClick={addTask}>Add</button>
      <button onClick={deleteTasks}>Delete</button>

      <ul>
        {taskList.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </>
  );
};
export default To_do;
