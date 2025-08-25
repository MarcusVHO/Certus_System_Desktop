import Layout from "./layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/login";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    element:<Layout/>,
    children:[
      {
        path:"/home",
        element:<div></div>
      }
    ]
  }
])
function App() {

  return <RouterProvider router={router}/>
}

export default App
