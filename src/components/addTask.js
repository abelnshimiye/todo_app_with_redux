import React, {useState} from 'react';
import {addNewTask} from '../store/task';
import { useDispatch } from 'react-redux';

const AddTask = () => {
    const [task, setTask] = useState("")

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addNewTask({task: task}))
        setTask("")
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='task'  placeholder='Enter new task...' value={task} onChange={(e)=> setTask(e.target.value)}/>

            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default AddTask