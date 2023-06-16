import { useState } from "react"
import "./styles.css"
export default function App(){
  const[newItem, setNewItem] = useState("");
  const[toDos, setNewToDos] = useState([]);
// setNewItem("choko");
function handleSubmit(e){
    e.preventDefault();
    setNewToDos(currentTodos =>{
          return[
            ...currentTodos, {
              id: crypto.randomUUID(),title:newItem, completed:false
            },
          ]
        })
        setNewItem("");
}
console.log(toDos);
    return <>
        <form onSubmit={handleSubmit} className= "new-item-form">
       <div className="new-item-form">
          <lable htmlFor = "item">New Item</lable>
          <input value={newItem}
          onChange={e=>{
            setNewItem(e.target.value);
            console(e.target.value);
          }}
          type="text" id="item"/>
          <button className="btn">Add</button>
       </div>
    </form>
    <h1>ToDo List</h1>
    <ul className="list">
      {
        toDos.map(todo=>{
        return   (
          <li key={todo.id
          }>
          <label>
             <input type="checkbox" checked= {todo.completed}/>
             {todo.title}
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        )  
        })
      }
    </ul>
    </>
}
