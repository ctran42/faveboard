import { Outlet } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <h2 className="text-3xl font-bold underline">FaveBoard</h2>
      <Outlet />
    </>
  )
}

export default App
