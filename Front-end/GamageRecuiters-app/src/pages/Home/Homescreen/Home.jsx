import HeroSection from "../HeroSection";
import Industries from "../Industries";
import AboutUs from "../AboutUs";
import Testimonial from "../Testimonials";
import Partners from "../Partners";
import ContactUs from "../ContactUs";
import Header from "../../../component/Header/Header";
import Navbar from "../Navbar";



export default function Home() {
    return (
        <>
            <Header/>
            <HeroSection />
            <Industries />
            <AboutUs />
            <Testimonial />
            <Partners />
            <ContactUs />
            <Navbar />
        </>
    );
}