import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import PartnersBanner from "../components/home/PartnersBanner";
import PreciousPlasticBanner from "../components/home/PreciousPlasticBanner";
import Map from "../components/home/Map";
import PetcoinsBannerDesktop from "../components/home/PetcoinsBannerDesktop";
import PetcoinsBannerMobile from "../components/home/PetcoinsBannerMobile";
import MainInfo from "../components/home/MainInfo";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
            <PartnersBanner/>
            <MainInfo/>
            <Stats/>
            <PreciousPlasticBanner/>
            <Map/>
            <PetcoinsBannerMobile/>
            <PetcoinsBannerDesktop/>
        </>
    )
}