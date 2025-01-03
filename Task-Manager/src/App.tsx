import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Nav />
        <Outlet />
      </div>
    </>
  );
}

export default App;
