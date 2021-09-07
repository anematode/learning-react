import React, { useState } from "react"
import ReactDOM from "react-dom"
import styles from "./index.module.css"

function TodoItem ({ name, onRemove }) {
  return ( <li>{name}</li> )
}

function TodoList () {
  const [ items, setItems ] = useState([])
  const [ eventInputName, setEventInputName ] = useState("")

  function addItem () {
    if (!eventInputName) return

    setItems([ ...items, { name: eventInputName }])
  }

  function handleInputChange (event) {
    setEventInputName(event.target.value)
  }

  return (
    <>
      <div className={styles.addItemDiv}>
    <button onClick={addItem} className={styles.addItem}>Add item</button>
      <input onChange={handleInputChange} value={eventInputName} className={styles.addItemInput} /></div>
    <ul>
      { items.map((item, i) => <TodoItem name={item.name} key={i} />) }
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
