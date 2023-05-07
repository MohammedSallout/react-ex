import { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask !== "") {
      const task = {
        id: tasks.length + 1,
        description: newTask,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <input value={newTask} onChange={handleInputChange} />
      <button onClick={handleAdd}>Add Task</button>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.description}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
