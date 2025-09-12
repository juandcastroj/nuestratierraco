import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import PetCoinsBanner from "../components/home/PetCoinsBanner";
import PartnersBanner from "../components/home/PartnersBanner";
import PreciousPlasticBanner from "../components/home/PreciousPlasticBanner";
import Map from "../components/home/Map";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
            <PartnersBanner/>
            <Stats/>
            <PreciousPlasticBanner/>
            <Map/>
            <PetCoinsBanner/>
        </>
    )
}