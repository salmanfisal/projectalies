import "./App.css";
import { Outlet } from "react-router-dom";
import Home from "./components/home.jsx";
function App() {
  return (
    <>
      <Outlet />
      <Home/>
    </>
  );
}

export default App;
