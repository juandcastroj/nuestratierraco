import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import History from "../components/home/History";
import Team from "../components/home/Team";
import PetCoinsBanner from "../components/home/PetCoinsBanner";
import PartnersBanner from "../components/home/PartnersBanner";
import PreciousPlasticBanner from "../components/home/PreciousPlasticBanner";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
            <Stats/>
            <PartnersBanner/>
            <History/>
            <Team/>
            <PreciousPlasticBanner/>
            <PetCoinsBanner/>
        </>
    )
}