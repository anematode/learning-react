import React, { useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import { InteractiveScene } from "grapheme/src/core/interactive_scene"
import { WebGLRenderer } from "grapheme/src/renderer/renderer"
import {Figure} from "grapheme/src/elements/figure"
import {FigureBaubles} from "grapheme/src/elements/figure_baubles"

function App () {
  const ref = useRef(null)
  useEffect(() => {
    const renderer = new WebGLRenderer()
    const scene = new InteractiveScene({ interactivity: true })

    const figure = new Figure({ interactivity: true })
    const baubles = new FigureBaubles()

    scene.add(figure.add(baubles))
    ref.current.appendChild(scene.domElement)

    function render() {
      renderer.renderDOMScene(scene)

      requestAnimationFrame(render)
    }

    render()
  }, [ ref.current ])

  return (
    <div ref={ref}></div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))
