/* eslint-disable no-undef */
import Header from "../../component/Header/Header";
import Apply from "../Apply Jobs/Apply";
import { useNavigate } from "react-router-dom";


function Jobvacancy() {
  
    const navigate = useNavigate();
    return ( 
        <>
         <Header></Header>
          <h1>job vacancy</h1>
          <button onClick={()=> navigate('/Apply')}> Apply </button>
        </>
     );
}

export default Jobvacancy;