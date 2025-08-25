import { Outlet } from "react-router-dom"
import { BoardProvider } from "./context/BoardContext"
import { ModalProvider } from "./context/ModalContext"
import './App.css'

function App() {
  return (
    <BoardProvider>
      <ModalProvider>
        <Outlet />
      </ModalProvider>
    </ BoardProvider>
  )
}

export default App
