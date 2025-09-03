import ProductBanner from "../components/products/ProductBanner";
import earings from "../assets/images/products/aretes-banner.png";
import ProductCarousel from "../components/products/ProductCarousel";
import Combinations from "../components/products/Combinations";

export default function ProductsRoute () {
    return (
        <>
            <ProductCarousel/>
            <Combinations/>
            <ProductBanner image={earings}/>
        </>
    )
}