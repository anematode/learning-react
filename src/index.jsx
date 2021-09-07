import React, { useState } from "react"
import ReactDOM from "react-dom"

function TodoItem ({ name }) {
  return ( <li>{name}</li> )
}

function App () {
  const [ current, setCurrent ] = useState(0)

  const handleClick = () => {
    setCurrent(current + 1)
  }

  return ( <>
    <ul>
      <TodoItem name={"greetings"}/>
      <TodoItem name={"greetings"}/>
      <TodoItem name={"greetings"}/>
      <TodoItem name={"greetings"}/>
    </ul>
  </> )
}

ReactDOM.render(<App/>, document.getElementById("root"))
