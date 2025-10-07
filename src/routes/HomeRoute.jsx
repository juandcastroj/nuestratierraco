import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
// import PartnersBanner from "../components/home/PartnersBanner";
import PreciousPlasticBanner from "../components/home/PreciousPlasticBanner";
import Map from "../components/home/Map";
import PetcoinsBannerDesktop from "../components/home/PetcoinsBannerDesktop";
import PetcoinsBannerMobile from "../components/home/PetcoinsBannerMobile";
import MainInfo from "../components/home/MainInfo";
import MainInfo2 from "../components/home/MainInfo2";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
            {/* <PartnersBanner/> */}
            <MainInfo/>
            <Stats/>
            <MainInfo2/>
            <PreciousPlasticBanner/>
            <Map/>
            <PetcoinsBannerMobile/>
            <PetcoinsBannerDesktop/>
        </>
    )
}