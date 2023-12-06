import { Link } from "react-router-dom";
import "./Header.css";
import gamagelogo from "../../assets/ClientsBussinessIcons/gamage-logo.png";
import{ FaBars,FaTimes} from "react-icons/fa";
import { useState } from "react";


function Header() {
 

  const[menuOpen,setmenuOpen] = useState(false);

  return (
    <>
    <header>

        <div className="image-section">

            <img src={gamagelogo} alt ="logo" id="gamge-logo"/>

        </div>
           
        <div className="topic">

            <h1 id="header-name">

                  Gamage Recruiters
            </h1>

         </div>
               <button id="login-button">
                    <p>
                    <Link to={"/Login"} id="link-style-button"> Login </Link>
                        </p>

                </button>

    <nav>

              {/*maximize navigation bar */}
             

             <div className="h-menu" id="maximize-navigation-bar" >

                 <p><Link to={"/"} id="link-style"> Home </Link> 
                 </p>

                <p><Link to={"/Ourjourney"}id="link-style"> Our Journey </Link> 
                </p>

                <p><Link to={"/Clientdiaries"}id="link-style"> Client Diaries</Link> 
                </p>

                <p><Link to={"/Jobvacancy"}id="link-style"> Job Vacancy </Link> 
                </p>

                <p><Link to={"/Contactus"}id="link-style"> Contact Us </Link> 
                
                </p>


            </div>

                  {/*mmize navigation bar */}


                {
                     menuOpen &&  <div className="h-menu" >

                     <p><Link to={"/"} id="link-style"> Home </Link> 
                     </p>
    
                     <p><Link to={"/Ourjourney"}id="link-style"> Our Journey </Link> 
                     </p>
    
                     <p><Link to={"/Clientdiaries"}id="link-style"> Client Diaries</Link> 
                     </p>
                     
                     <p><Link to={"/Jobvancy"}id="link-style"> Job Vacancy </Link> 
                     </p>
    
                     <p><Link to={"/Contactus"}id="link-style"> Contact Us </Link> 
                       
                     </p>
                     
    
                       </div>

                }
               
        </nav>

             <button onClick={()=>{setmenuOpen(!menuOpen)}}  id="header-btn" >
             <FaBars/>
             </button>
             

    </header>
   
    </>

    
  )
}

export default Header;