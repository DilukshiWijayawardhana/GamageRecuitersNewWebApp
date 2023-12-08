import Header from "../../component/Header/Header";
import Footer from "../Components/Footer.jsx";
import GalleryData from "./GalleryData.json";
import { useEffect, useState } from "react";
import "./jobvacancy.css";
function Jobvacancy() {
  const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.titile))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile == itemData);
    setData(filterData);
  }

    return ( 
        <>
         <Header></Header>
         <div className="App">
              <div className="galleryWrapper">
                <div className="filterItem">
                  <ul>
                    <li><button onClick={()=> setData(GalleryData)}>All</button></li>
                    {
                      collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
                    }
                  </ul>
                </div>
                <div className="galleryContainer">
                  {
                    data.map((item)=> <div  key={item.id} className="galleryItem">
                    <img src={item.image} />
                    <button id ="view-button">
                      <a href={item.image}>
                       View Now
                       </a>
                    </button>
                    </div> )
                  }
                </div>

              
      </div>
    </div>
     <Footer/>
        </>
     );
}

export default Jobvacancy;