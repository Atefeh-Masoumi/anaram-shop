import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/LoginPage/Login";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
