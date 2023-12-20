import HeroSection from "../HeroSection";
import Industries from "../Industries";
import AboutUs from "../AboutUs";
import Testimonial from "../Testimonials";
import Partners from "../Partners";
import ContactUs from "../ContactUs";
import Header from "../../../component/Header/Header";
import Navbar from "../Navbar";
import CarouselSlide from "../CarouselSlide";
import Inquary from "../Inquary";


export default function Home() {
    return (
        <>
            <Header/>
            <CarouselSlide/>
            <HeroSection />
            <Industries />
            <AboutUs />
            <Testimonial />
            <Partners />
            <ContactUs />
            <Inquary/>
            <Navbar />
        </>
    );
}