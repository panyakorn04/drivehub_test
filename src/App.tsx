
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Drivehub from "./page/Drivehub";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Drivehub />} />
      </Routes>

    </>
  );
}

export default App;
