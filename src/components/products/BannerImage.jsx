export default function BannerImage({ image }) {
  return (
    <div className="w-full">
      <img
        src={image}
        alt="Banner"
        className="w-full h-auto object-cover" />
    </div>
  );
}