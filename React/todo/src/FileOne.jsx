import React , {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FileOne = () => {
    // Todo Webapp using functional component 
    let [query , setQuery] = useState();
    let [taskArray , setTaskArray] = useState([])

    let handleAdd = ()=>{
        let obj = {
            id : uuidv4(),
            task : query
        }
        let arr = [obj, ...taskArray];
        setTaskArray(arr)
        setQuery("");
    }

    let handleDelete = (id) =>{
        let arr = taskArray.filter(obj => obj.id != id)
        setTaskArray(arr)
    }
  return (
    <div>
        
      <input type="text" value={query} onChange={(event)=> setQuery(event.target.value)}></input>
      <button onClick={handleAdd} > Add </button>
      <ul>
       {
        taskArray.map(obj => <li key={obj.id}> {obj.task} <button onClick={()=>handleDelete(obj.id)}> Delete </button></li>)  
       }
      </ul>
    </div>
  )
}

export default FileOne
