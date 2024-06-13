import React from "react";
import { v4 as uuidv4 } from "uuid";

class FileTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      taskArray: [],
    };
    console.log("constructor ")
  }

  componentDidMount() {
    console.log("component did mount ")
  }

  componentDidUpdate(){
    // if( somestate is changed--> query  ){
    //}else if ( taskArray is chnaged )
  }

  render() {
    console.log("Render")
    let handleChange = (event) => {
      this.setState({
        query: event.target.value,
      });
    };

    let handleAdd = () => {
      let obj = {
        id: uuidv4(),
        task: this.state.query,
      };

      this.setState({
        taskArray: [obj, ...this.state.taskArray],
        query: "",
      });
    };


    let handleDelete = (id) => {
        let arr = this.state.taskArray.filter(obj=> obj.id != id );

        this.setState({
            taskArray : arr 
        })
    }

    return (
      <>
      
        <input
          type="text"
          onChange={handleChange}
          value={this.state.query}
        ></input>
        <button onClick={handleAdd}> Add </button>
        <ul>
         {
            this.state.taskArray.map((obj)=> <li key={obj.id}> {obj.task} <button onClick={()=>handleDelete(obj.id)}> Delete</button> </li>)
         }
        </ul>
      </>
    );
  }
}

export default FileTwo;
