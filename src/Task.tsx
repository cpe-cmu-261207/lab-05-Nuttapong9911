type TaskProps = {
    id: number;
    name: string;
    deleteFn: Function; //Function type
    doFn: Function;
  }
  
  const Task = ({id, name, deleteFn, doFn} : TaskProps) => {
    return (
        
        <div
            className="flex justify-between h-8 items-center py-6 border-b taskDiv"
          >
            <span className="text-2xl"> {name} </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl btn"onClick={ () => doFn(name,id) } >Done</button>
              <button className="bg-red-400 w-24 text-2xl btn" onClick={ () => deleteFn(id) }>Delete</button>
            </div>
          </div>
    
        //   <div>
    //     {name}
    //     <button onClick={ () => deleteFn(id) }>Delete</button>
    //   </div>
    )
  }
  
  export default Task