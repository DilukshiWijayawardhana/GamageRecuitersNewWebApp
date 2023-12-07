import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Homescreen/Home";
import Contactus from "./pages/Contact Us/Contactus";
import Login from "./pages/Admin Login/Admin_login";
import Register from "./pages/Admin Register/Admin_register";
import Panel from "./pages/Admin Panel/Admin_panel";

import Footer from "./pages/Components/Footer";
import './App.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* client side */}
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/Contactus" element={<Contactus></Contactus>}> </Route>

          {/* admin side */}
          <Route path="/login" element={<Login></Login>}> </Route>
          <Route path="/register" element={<Register></Register>}> </Route>
          <Route path="/panel" element={<Panel></Panel>}> </Route>


        </Routes>

      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
