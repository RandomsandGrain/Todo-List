import { useState } from 'react'
import Child from "./Child"
import './App.css'

function App() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState("")

  const deleteTask =
  (index) => setTask(task.filter((_, q) => q !== index))

 const completeTask = (index) => { 
  const newTasks = task.map((taskItem, i) => 
    i === index ? { ...taskItem, completed: true } : taskItem
  );
  setTask(newTasks);
};

const addTask = () => {
  if(input.trim() === "") return;
  setTask([...task, { text: input, completed: false}]);
   setInput("")
} 

  return (
    
      <div>
<input 
placeholder="Type Task..."
 value={input}
 onChange={(event) => setInput(event.target.value)}
 />

<Child tasks={task} deleteTask={deleteTask} completeTask={completeTask} addTask={addTask}/>
      </div>
  )
}

export default App
