import { useState } from "react";
import InputTodo from "./todo/input.todo"

const ChildrenComponent = () => {
  return (
    <div>Children Component</div>
  )
};

function App() {
  const [count, setCount] = useState(10)
  const name = "ChillBoyz";
  const age = 22;
  const info = {
    gender: "male",
    address: "hue"
  }

  const [listTodo, setListTodo] = useState(
    ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5", "todo 6"]
  )


  const handleTest = (name: string) => {
    alert(`handle test with name = ${name}`)
  }

  // mounting:=  born: phase
  return (
    <div>
      <div>count = {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <div className="parent" id="cha" >
        <div className="child"></div>
      </div>
      <InputTodo
        name={name}
        age={age}
        info={info}

        handleTest={handleTest}

        listTodo={listTodo}
        setListTodo={setListTodo}
      >
        <ChildrenComponent />
      </InputTodo>

      <br />
      <ul>
        {listTodo.map((item, index) => {

          return (
            <li key={index}>{item}</li>

          )
        })}
      </ul>
    </div>
  )
}

export default App
