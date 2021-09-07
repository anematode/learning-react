import React, { useState } from "react"
import ReactDOM from "react-dom"

function TodoItem ({ name, onRemove }) {
  return ( <li>{name}</li> )
}

function TodoList () {
  const [ items, setItems ] = useState([])

  function addItem () {
    let name = prompt()
    setItems([ ...items, {name}])
  }

  return (
    <>
    <button onClick={addItem}>Add item</button>
    <ul>
      { items.map(item => <TodoItem name={item.name} />) }
    </ul>
      </>
  )
}

function App () {
  const [ current, setCurrent ] = useState(0)

  const handleClick = () => {
    setCurrent(current + 1)
  }

  return ( <TodoList /> )
}

ReactDOM.render(<App/>, document.getElementById("root"))
