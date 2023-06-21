import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import "./style/main.css";
import { Tasks } from "./components/Tasks";
import { AddForm } from "./components/AddForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  //Work with useEffect
  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);

  //Add Task
  const addTask = (task) => {
    const res = fetch("http://localhost:5000/tasks", {
      method: "POST",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //Delete Task
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const taskReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        clickHandler={() => {
          setShowForm(!showForm);
        }}
        showAdd={showForm}
      />
      {showForm && <AddForm onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onDoubleClick={taskReminder}
        />
      ) : (
        "Create a new Task !"
      )}
    </div>
  );
}
