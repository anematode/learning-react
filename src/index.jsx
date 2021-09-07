import React, { useState } from "react"
import ReactDOM from "react-dom"

function App () {
  const [ current, setCurrent ] = useState(0)

  const handleClick = () => {
    setCurrent(current + 1)
  }

  return ( <> <p>{current}</p> <button onClick={handleClick}>Click</button> </> )
}

ReactDOM.render(<App/>, document.getElementById("root"))
