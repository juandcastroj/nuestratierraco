import ProductBanner from "../components/products/ProductBanner";
import Products from "../components/products/Products";
import combinations from "../assets/images/products/colors.png";
import earings from "../assets/images/products/earings2.png";
import ProductCarousel from "../components/products/ProductCarousel";
import Combinations from "../components/products/Combinations";

export default function ProductsRoute () {
    return (
        <>
            <Products/>
            <ProductCarousel/>
            <Combinations/>
            <ProductBanner image={combinations}/>
            <ProductBanner image={earings}/>
        </>
    )
}