import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contactus from "./pages/Contact Us/Contactus";
import Jobvacancy from "./pages/Job-vacancy/Jobvacancy";
import Clientdiaries from "./pages/Client Diaries/Clientdiaries";
import Ourjourney from "./pages/Our Journey/Ourjourney";
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
             <Route path="/" element={<Home></Home>}> </Route>
             <Route path="/Contactus" element={<Contactus></Contactus>}> </Route>
             <Route path="/Clientdiaries" element={<Clientdiaries></Clientdiaries>}> </Route>
             <Route path="/Jobvacancy" element={<Jobvacancy></Jobvacancy>}> </Route>
             <Route path="/Ourjourney" element={<Ourjourney></Ourjourney>}> </Route>
      
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
