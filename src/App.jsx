import "./App.css";
import Navbar from "./Components/Navbar";
import ProductLists from "./Components/ProductLists";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <ProductLists />
      <ToastContainer position="top-center" autoClose={2000}/>
    </div>
  );
}

export default App;
