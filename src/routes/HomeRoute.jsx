import BannerImage from "../components/home/BannerImage";
import BannerText from "../components/home/BannerText";
import Hero from "../components/home/Hero";
import History from "../components/home/History";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
            <Stats/>
            <History/>
            {/* <BannerImage/> */}
            {/* <BannerText/> */}
            {/* <Testimonials/> */}
        </>
    )
}