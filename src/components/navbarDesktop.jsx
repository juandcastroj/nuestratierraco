import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import ThemeSwitcher from "./themeSwitcher";
import { useLocation } from "react-router-dom";

export function NavbarDesktop({ navigationItems, handleMobileMenu }) {
  const [hasBackground, setHasBackground] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasBackground(currentScrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <>
      <nav
        aria-label="Global"
        className={`font-mono animate-fade-down animate-duration-[1500ms] animate-delay-400 mx-auto flex max-w-7xl items-center justify-end lg:justify-center p-6 lg:px-8
         ${
          hasBackground ? "" : "bg-transparent"
        }`}
      >
        <div className="flex lg:hidden fixed top-6 right-6">
          <button
            type="button"
            onClick={handleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div
          className={`hidden lg:flex lg:gap-x-12 fixed top-8 rounded-full px-4 py-2 items-center backdrop-blur-xl transition-colors duration-300 ${
            hasBackground ? "bg-white/40 dark:bg-[#471f8d]/50 shadow-md backdrop-blur-md" 
            : "bg-transparent"
          }`}
        >

          { navigationItems.map(({ name, to }, index) => {
            const isActive = location.pathname === to; 
            return (
              <Link
                key={index}
                to={to}
                className={`text-base font-semibold ${
                  isActive
                  ? "bg-white/60 dark:bg-white/30 bg-opacity-50 rounded-full px-3 py-2 text-green-800 dark:text-white"
                  : "text-green-800 dark:text-gray-100"
                }`}
              >
                {name}
              </Link>
            );
          })}
        </div>

        {/* <ThemeSwitcher className="hidden lg:inline" /> */}
      </nav>
    </>
  );
}
