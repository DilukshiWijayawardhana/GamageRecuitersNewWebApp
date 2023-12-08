import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Homescreen/Home";
import Jobvacancy from "./pages/Job-vacancy/Jobvacancy";
import Clientdiaries from "./pages/Client Diaries/Clientdiaries";
import Ourjourney from "./pages/Our Journey/Ourjourney";
import Login from "./pages/Admin Login/Admin_login";
import Register from "./pages/Admin Register/Admin_register";
import Panel from "./pages/Admin Panel/Admin_panel";
import Footer from "./pages/Components/Footer";
import Apply from "./pages/Apply Jobs/Apply";
import './App.css';



function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>
          {/* client side */}
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/Apply" element={<Apply></Apply>}> </Route>
          <Route path="/Clientdiaries" element={<Clientdiaries></Clientdiaries>}> </Route>
          <Route path="/Jobvacancy" element={<Jobvacancy></Jobvacancy>}> </Route>
          <Route path="/Ourjourney" element={<Ourjourney></Ourjourney>}> </Route>

          {/* admin side */}
          <Route path="/login" element={<Login></Login>}> </Route>
          <Route path="/register" element={<Register></Register>}> </Route>
          <Route path="/panel" element={<Panel></Panel>}> </Route>

        </Routes>


      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
