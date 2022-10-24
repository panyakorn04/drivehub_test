
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drivehub from "./page/Drivehub";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";
import { PageLoader } from "./components/PageLoader";
import Home from "./page/Home";


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Drivehub />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={Drivehub} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
