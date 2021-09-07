import React, { useRef, useEffect } from "react"
import ReactDOM from "react-dom"

function App () {
  const ref = useRef(null)
  useEffect(() => {
    /**
     * @type {HTMLCanvasElement}
     */
    const canvas = ref.current
    const ctx = canvas.getContext("2d")

    ctx.fillRect(40, 40, 50, 50)
  }, [ ref.current ])

  return (
    <canvas width="500" height="500" ref={ref}></canvas>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))
