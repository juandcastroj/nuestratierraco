import BannerImage from "../components/products/BannerImage";
import Products from "../components/products/Products";
import earings from "../assets/images/products/earings2.png";
import earingsPromo from "../assets/images/products/colors.png";
// import ImageCarouselKeen from "../components/products/ImageCarouselKeen";


export default function ProductsRoute () {
    return (
        <>
            {/* <ImageCarouselKeen images={[earings, earingsPromo,earings, earingsPromo, earings]} /> */}
            <Products/>
            <BannerImage image={earings}/>
            {/* <BannerImage image={earingsPromo}/> */}
        </>
    )
}