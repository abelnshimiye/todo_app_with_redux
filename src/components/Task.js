import React, { useEffect, useState } from 'react'
import {loadTasks} from "../store/task";
import { useDispatch, useSelector } from 'react-redux';

const Task = () => {
  // const [tasks, setTasks] = useState([]);
  const {tasks, loading} = useSelector(state=> state.tasks)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadTasks())
  }, [])




  return (
    <>

      {loading ? <p>Loading...</p> : <div>{tasks.map((task) => {
        return(
          <p key={task.id}>{task.task}</p>
        )
      })} </div>}
      
      

    </>
  )
}

export default Task