import HeroSection from "../HeroSection";
import Industries from "../Industries";
import AboutUs from "../AboutUs";

import Partners from "../Partners";
import Header from "../../../component/Header/Header";
import Navbar from "../Navbar";
import CarouselSlide from "../CarouselSlide";
import Inquary from "../../Inquary/Inquary";
import Feedback from "../Feedback/Feedback";




export default function Home() {
    return (
        <>
            <Header/>
            <CarouselSlide/>
            <HeroSection />
            <Industries />
            <AboutUs />
            <Feedback/>
            <Partners />
            <Inquary/>
            <Navbar />
        </>
    );
}