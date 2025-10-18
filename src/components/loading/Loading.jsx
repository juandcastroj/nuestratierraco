import logoImg from "../../assets/images/logo/logo.png";

export default function Loading () {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src={logoImg}
        alt="Logo"
        className="h-20 w-20 animate-spin animate-delay-700 animate-duration-1000"
      />
    </div>
  );
};

