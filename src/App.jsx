import { useMemo, useState } from "react"
import { Form } from "./components/Forms"

function App() {
  const [ tasks, setTasks ] = useState([
    { name: 'Pagar Boleto', completed: false },
    { name: 'Lavar o carro', completed: false },
    { name: 'Fazer trabalho', completed: false },
  ]);

  const handleSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const remove = (taskName) => {
    const taskUpdate = tasks.filter(task => task.name !== taskName)
    setTasks(taskUpdate)
  }

  const completed = (taskIndex) => {
    const taskUpdate = [...tasks];
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    setTasks(taskUpdate);
  }

  return (
  <div>
    <span>Tasks concluídas</span>
    <Form onSubmit={handleSubmit}/>
    <ul>
      {tasks.map((task, index) => <li key={task.name}>
        {task.name}
        <button onClick={() => remove(task.name)}>remove</button>
        <button onClick={() => completed(index)}>
          { task.completed ? "desmarcar" : "completar" }
        </button>
      </li>)}
    </ul>
  </div>
  )
}

export default App
