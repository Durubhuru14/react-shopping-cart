import "./App.css";
import Navbar from "./Components/Navbar";
import ProductLists from "./Components/ProductLists";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Components/Success";
import Cancel from "./Components/Canceled";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <ProductLists />
              <ToastContainer position="top-center" autoClose={2000} />
            </div>
          }
        />
        <Route path="/success" element={<Success />} />
        <Route path="/canceled" element={<Cancel />} />
      </Routes>
    </Router>
  );
}

export default App;
