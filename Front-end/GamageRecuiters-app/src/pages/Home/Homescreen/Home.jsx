import HeroSection from "../HeroSection";
import Industries from "../Industries";
import AboutUs from "../AboutUs";
import Testimonial from "../Testimonials";
import Partners from "../Partners";
import ContactUs from "../ContactUs";
import Navbar from "../Navbar";


export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Industries />
            <AboutUs />
            <Testimonial />
            <Partners />
            <ContactUs />
        </>
    );
}