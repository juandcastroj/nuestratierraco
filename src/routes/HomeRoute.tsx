import Hero from "../components/home/Hero.tsx";
import Stats from "../components/home/Stats.tsx";
import Map from "../components/home/Map.tsx";
import PreciousPlasticBanner from "../components/home/PreciousPlasticBanner.tsx";
import PetcoinsBannerDesktop from "../components/home/PetcoinsBannerDesktop.tsx";
import PetcoinsBannerMobile from "../components/home/PetcoinsBannerMobile.tsx";
import MainInfo from "../components/home/MainInfo.tsx";
import MainInfo2 from "../components/home/MainInfo2.tsx";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
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