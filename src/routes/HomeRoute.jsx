import BannerText from "../components/home/BannerText";
import Hero from "../components/home/Hero";
import History from "../components/home/History";
import PetCoinsBanner from "../components/home/PetCoinsBanner";
import Stats from "../components/home/Stats";
import StrategicLines from "../components/home/StrategicLines";

export default function HomeRoute() {
    return (
        <>
            <Hero/>
            <PetCoinsBanner/>
            <Stats/>
            <History/>
            <BannerText/>
            <StrategicLines/>
        </>
    )
}