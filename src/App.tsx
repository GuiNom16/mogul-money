// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//import "./App.css";
import SideMenu from "./layout/SideMenu/SideMenu";
import Dashboard from "./layout/SideMenu/Test/Dashboard";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Results from "./pages/Results/Results";
import { AppBar } from "@mui/material";

function App() {
  //const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppBar />}>
        <Route path="Home" element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
