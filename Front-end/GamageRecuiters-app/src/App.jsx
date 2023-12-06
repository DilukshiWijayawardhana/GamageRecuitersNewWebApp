import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contactus from "./pages/Contact Us/Contactus";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
             <Route path="/" element={<Home></Home>}> </Route>
             <Route path="/Contactus" element={<Contactus></Contactus>}> </Route>
      
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
