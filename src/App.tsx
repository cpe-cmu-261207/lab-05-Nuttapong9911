import React from 'react';
import { useState } from 'react'
import Task from './Task'
import './App.css';
import InputBox from './InputBox'
import AddButton from './AddButton'


type TaskData = {
  id: number;
  name: string;
}

function App() {

  const [curTask, setCurTask] = useState<string>('')
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [doneTasks, setDoneTasks] = useState<TaskData[]>([])

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
    if(ev.key === 'Enter'){
      addTask(curTask)
      ev.currentTarget.value = ''
      setCurTask('')
    }
  }

  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value)
  }


  const addTask = (taskName: string) => {
    if(curTask){
      const newId = (new Date()).getTime()
      const newTasks = [...tasks, {id: newId, name: taskName}]
      setTasks(newTasks)
    }else{
      alert("Task cannot be empty!")
    }
    
    
  }

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

  const doTask = (taskName: string, taskId : number) => {
    const newTasks = tasks.filter(x => x.id !== taskId)
    setTasks(newTasks)
    const doingTasks = [...doneTasks, {id: taskId, name: taskName}]
    setDoneTasks(doingTasks)
  }

  return (
    <div>

      {/* header section */}
      <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by Nuttapong Boonsala 630610744</span>
      </div>

      {/* todo section */}
      <div className='mx-auto max-w-2xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
          <InputBox keyDown = {onKeyDownCallback} change={onChangeCallback}/>
          <AddButton add = {addTask} task = {curTask} />

          
        </div>
        <div className='taskList'>
          {tasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doFn={doTask}/>)}
       </div>
       <div className='doneTaskList'>
          {doneTasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteTask} doFn={doTask}/>)}
       </div>
        

      </div>

      {/* footer section */}
      <p className='text-center text-gray-400'> Copyright © 2021 </p>
    </div>
  );
}

export default App;
