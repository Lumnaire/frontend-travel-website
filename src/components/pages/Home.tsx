import BookingSteps from "../organs/BookingSteps";
import HeroSection from "../organs/HeroSection";
import Newsletter from "../organs/Newsletter";
import Partners from "../organs/Partners";
import Services from "../organs/Services";
import Testimonials from "../organs/Testimonials";
import TopDestination from "../organs/TopDestination";

const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <TopDestination />
            <BookingSteps />
            <Testimonials />
            <Partners />
            <Newsletter />
        </>
    );
};

export default Home;
