import Layout from "./layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home.jsx";
import Programacao from "./pages/pmd/program/programacao.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/pmd/program",
        element:<Programacao/>
      },
    ],
  },
]);
function App() {

  return <RouterProvider router={router}/>
}

export default App
