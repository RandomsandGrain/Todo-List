

function Child({tasks, deleteTask, completeTask, addTask}) {
    return(
        <div>
             <button
             onClick={() => addTask()}>
  Add
  </button> 
            <ul>
        {tasks.length < 1 ? <h2>No Tasks yet</h2> : 
        
        tasks.map((todo, index) =>  todo.completed ? 

        <li className="completedTask" key={index}> Completed: {todo.text} 
        <button className="deleteButton" onClick={() => deleteTask(index)}>⛔</button> 
        </li> :
          
          <li key={index}>
            
            {todo.text}
          
          <button onClick={() => deleteTask(index)}>⛔</button> 

          <button onClick={() => completeTask(index)}>✅</button>

          </li>)}
</ul>
        </div>
    )
}

export default Child