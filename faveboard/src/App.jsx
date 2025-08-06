import { Outlet } from "react-router-dom"
import { BoardProvider } from "./context/BoardContext"
import './App.css'

function App() {
  return (
    <BoardProvider>
      <Outlet />
    </ BoardProvider>
  )
}

export default App
