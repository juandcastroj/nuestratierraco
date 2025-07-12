import bannerProduct from "../../assets/images/home/banner.png";

export default function ImageBanner() {
  return (
    <div className="w-full">
      <img
        src={bannerProduct}
        alt="BannerProduct"
        className="w-full h-auto object-cover" />
    </div>
  );
}

