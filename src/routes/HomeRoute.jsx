import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

import History from "../components/home/History";
import Team from "../components/home/Team";
import BannerPreciousPlastic from "../components/home/BannerPreciousPlastic";

import PetCoinsBanner from "../components/home/PetCoinsBanner";
import PartnersBanner from "../components/home/PartnersBanner";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
            <Stats/>
            <PartnersBanner/>
            <History/>
            <Team/>
            <BannerPreciousPlastic/>

            <PetCoinsBanner/>

        </>
    )
}