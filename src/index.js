import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "bootstrap-icons/font/bootstrap-icons.css"
import { StateLayer } from "./components/StateLayer.js"
import reducer, { initialState } from "./components/reducer"

ReactDOM.render(
  <React.StrictMode>
    <StateLayer initialState={initialState} reducer={reducer}>
      <App />
    </StateLayer>
  </React.StrictMode>,
  document.getElementById("root")
)
