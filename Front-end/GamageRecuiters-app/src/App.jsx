import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contactus from "./pages/Contact Us/Contactus";

import Jobvacancy from "./pages/Job-vacancy/Jobvacancy";
import Clientdiaries from "./pages/Client Diaries/Clientdiaries";
import Ourjourney from "./pages/Our Journey/Ourjourney";

import Login from "./pages/Admin Login/Admin_login";
import Register from "./pages/Admin Register/Admin_register";
import Panel from "./pages/Admin Panel/Admin_panel";

import Footer from "./pages/Components/Footer";
import Jobvacancy from "./pages/Job-vacancy/Jobvacancy";
import Clientdiaries from "./pages/Client Diaries/Clientdiaries";
import Ourjourney from "./pages/Our Journey/Ourjourney";
//import './App.css';
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

          <Route path="/Clientdiaries" element={<Clientdiaries></Clientdiaries>}> </Route>
          <Route path="/Jobvacancy" element={<Jobvacancy></Jobvacancy>}> </Route>
          <Route path="/Ourjourney" element={<Ourjourney></Ourjourney>}> </Route>
      
      </Routes>
      

      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App;
