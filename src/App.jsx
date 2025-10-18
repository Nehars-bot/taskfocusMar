
import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";
import "./Style.css";

export default function App() {
const [tasks, setTasks] = useState([]);

useEffect(() => {
  localStorage.setItem
  ("tasks", JSON.stringify(tasks))
});

  const addTask = (task) => {
setTasks([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
const newtask = [...tasks];
 newtask[index] = updatedTask;
 setTasks(newtask);
  }

  const deleteTask = (index) => {
setTasks(tasks.filter((_, i) => i != index));
  }

  const clearTasks = () => {
    setTasks([]);
  }

  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask = {addTask}/>
      <TaskList tasks = {tasks}
      updateTask = {updateTask} 
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks} />
 {tasks.length>0 && 
(<button onClick={clearTasks}>Clear all tasks</button>)}
    </div>
  )
}


