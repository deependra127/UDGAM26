import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./assets/Components/Navbar";
import Footer from "./assets/Components/Footer";

function App() {
  return (
    <>
      <div
        id="Navbar-container"
        className="flex flex-col justify-center items-center w-full h-[12vh] max-md:h-[7vh]"
      >
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
