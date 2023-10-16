import React from 'react'
import Task from './components/Task'
import AddTask from './components/addTask'


const App = () => {
  return (
    <div>
      <AddTask/>
      <Task/>
    </div>
  )
}

export default App