import { useEffect, useState } from "react";


function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((prev)=> [...prev,toDo])
    setTodo("");
  };


  return (
    <div >
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="write your todo" />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((toDo,idx) => <li key={idx}>{toDo}</li> )}
      </ul>
    </div>
  );
}

export default App;
