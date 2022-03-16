import { useState } from "react"

export const Form = ({ onSubmit }) => {
  const [ nameTask, setNameTask] = useState('');

  const handleWriteTask = (event) => {
    setNameTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { name: nameTask, completed: false }
    onSubmit(newTask);
    setNameTask('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={ nameTask } onChange={ handleWriteTask }/>
        <button type="submit">Criar Task</button>
    </form>
  )

}