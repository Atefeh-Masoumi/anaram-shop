import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
