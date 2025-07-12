import ProductBanner from "../components/products/ProductBanner";
import Products from "../components/products/Products";
import earings from "../assets/images/products/earings2.png";

export default function ProductsRoute () {
    return (
        <>
            <Products/>
            <ProductBanner image={earings}/>
        </>
    )
}