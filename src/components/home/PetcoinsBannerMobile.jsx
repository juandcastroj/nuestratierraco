import { Link } from "react-router-dom";

export default function PetcoinsBannerMobile() {
  return (
    <Link
      to="/petcoins"
      className="block sm:hidden sticky bottom-0 start-0 z-30 bg-[#004e64] text-center text-[#c0ffd9] font-semibold py-2 px-4"
    >
       ¡Úsa tus Petcoins <span role="img" aria-label="coin">🪙</span> para canjear tu reciclaje por nuestros productos!
    </Link>
  );
}
