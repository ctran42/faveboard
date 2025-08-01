import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Editor from './pages/Editor'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "edit/:id", element: <Editor /> },
    ],
  },
])

export default router;