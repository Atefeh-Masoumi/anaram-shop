import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/LoginPage/Login";
import Profilepage from "./pages/Profile/Profilepage";
import SignUpPage from "./pages/SignUpPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/profile" element={<Profilepage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
