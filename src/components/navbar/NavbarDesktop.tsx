import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef, useState } from "react";
import type { NavBarItem } from "../../constants/navbarItems.ts";
import nuestraTierraLogo from "../../assets/images/logo/logo.png";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";

interface NavbarDesktopProps {
  navigationItems: NavBarItem[];
  handleMobileMenu: () => void;
}

export default function NavbarDesktop({
  navigationItems,
  handleMobileMenu,
}: NavbarDesktopProps) {
  const location = useLocation();
  const { firstName } = useAuth();

  const [hasBackground, setHasBackground] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setHasBackground(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name?: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name || null));
  };

  return (
    <nav
    aria-label="Global"
    className={`flex items-center justify-between px-6 lg:px-8 animate-fade-down animate-duration-[2500ms] animate-delay-[250ms]
      ${
        location.pathname === "/account"
          ? "bg-white shadow-md backdrop-blur-sm py-1"
          : hasBackground
          ? "bg-white/30 shadow-md backdrop-blur-sm py-6"
          : "bg-transparent py-6"
      }`}
  >
    {/* Logo */}
    <div className="flex lg:flex-1">
      <Link to="/" className="-m-1.5 p-1.5">
        <span className="sr-only">NuestraTierraLogoCo</span>
        <img
          alt="Logo"
          src={nuestraTierraLogo}
          className={ `w-auto rounded-full
               ${
                 location.pathname === "/account" 
                 ? "h-16 relative top-0" 
                 : "h-24 absolute top-3"}
          `}
        />
      </Link>
    </div>

    {/* Botón Mobile */}
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={handleMobileMenu}
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="size-10" />
      </button>
    </div>

    {/* Menu Desktop */}
    <div className="hidden lg:flex items-center lg:gap-x-12" ref={dropdownRef}>
      {navigationItems.map((item) =>
        item.subItems ? (
          <div key={item.name} className="relative">
            <button
              onClick={() => toggleDropdown(item.name)}
              className="flex items-center gap-1 text-sm font-semibold cursor-pointer text-blueText">
              {item.name}
              <ChevronDownIcon className="w-4 h-4" strokeWidth="2.5"/>
            </button>
            {openDropdown === item.name && (
              <div className="absolute text-center mt-2 w-44 rounded-md shadow-lg bg-white/70 ring-1 ring-gray-200 z-50">
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.name}
                    to={sub.to}
                    onClick={() => toggleDropdown()}
                    className="block px-4 py-2 text-sm font-semibold text-blueText hover:bg-blueText/10"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={item.name}
            to={item.to}
            className={`text-sm/6 font-semibold cursor-pointer ${
              location.pathname === item.to
                ? "text-[#458ea8]"
                : "text-blueText hover:text-[#458ea8]"
            }`}
          >
            {item.name}
          </Link>
        )
      )}
    </div>

    {/* Usuario / Mi Cuenta */}
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      {firstName ? (
        <Link
          to="account"
          className="text-sm/6 font-semibold text-[#033649]"
        >
          Hola, {firstName} 👋
        </Link>
      ) : (
        location.pathname !== "/auth" && (
            <Link
              to="/auth"
              onClick={handleMobileMenu}
              className="text-center sm:text-left -mx-3 block rounded-xl px-3 py-1 text-sm font-semibold text-blueText border-blueText border-[1px]"
            >
              Mi Cuenta
            </Link>
        )
      )}
    </div>
  </nav>
  );
}

