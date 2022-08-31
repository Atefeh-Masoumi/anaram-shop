import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavbarComponent from "./components/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/LoginPage/Login";
import Products from "./pages/ProductPages/AllProducts";
import AASizeBattery from "./pages/ProductPages/categories/Battery/AA/AA";
import AAASizeBattery from "./pages/ProductPages/categories/Battery/AAA/AAA";
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
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/battery/aaa-size" element={<AAASizeBattery/>}/>
        <Route path="/products/battery/aa-size" element={<AASizeBattery/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
