import "./App.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState } from "react";

function App() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Shopping",
      date: "30th Aug",
      reminder: true,
    },
    {
      id: 2,
      name: "Barber",
      date: "30th Sep",
      reminder: false,
    },
    {
      id: 3,
      name: "Driving",
      date: "10th Oct",
      reminder: false,
    },
    // {
    //   id: 3,
    //   text: "Driving",
    //   day: "10th Oct",
    //   reminder: false,
    // },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    // console.log(id, "deleted");
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toogle Reminder
  const toogleReminder = (id) => {
    // console.log(id, "Toogled");
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    // const id = Math.floor(Math.random() * 100) * 1;
    // task = { id, reminder: true, ...task };
    // setTasks([...tasks, task]);

    const id = Math.floor(Math.random() * 100) + 1;
    const newTask = { id, reminder: false, ...task };
    setTasks([...tasks, newTask]);
  };

  // Update Task
  const updateTask = (task) => {
    setName(task.name);
    setDate(task.date);
    setReminder(task.reminder);
    setID(task.id);
    console.log(task);
  };

  // Edit task
  const editTask = (task) => {
    task.id =  id;
    task.name =  name;
    task.date = date;
    task.reminder = reminder;

    const updatedTasks = tasks.map(singleTask => {
      if(task.id === singleTask.id) return task
      else return singleTask
    })

    setTasks(updatedTasks)
  
  };

  return (
    <div className="Container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />

      {showAddTask && (
        <AddTask
          taskId={id}
          tasks={tasks}
          onAdd={addTask}
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          reminder={reminder}
          setReminder={setReminder}
        />
      )}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToogle={toogleReminder}
          onUpdate={updateTask}
          onEdit={editTask}
        />
      ) : (
        <p>No Tasks To Show</p>
      )}
    </div>
  );
}

export default App;
