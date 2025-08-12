import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import nuestraTierraLogo from '../../assets/images/logo/logo.png'
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function NavbarDesktop({ navigationItems, handleMobileMenu }) {
    
    const location = useLocation();
    const { firstName } = useAuth();
    const [hasBackground, setHasBackground] = useState(false);

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
            <nav aria-label="Global" 
                 className={`flex items-center justify-between py-2 px-6 lg:px-8 animate-fade-down animate-duration-[2500ms] animate-delay-[250ms]
                    ${
                    location.pathname === "/mi-cuenta"
                        ? "bg-white shadow-md backdrop-blur-sm"
                        : hasBackground
                        ? "bg-white/30 shadow-md backdrop-blur-sm"
                        : "bg-transparent"
                    }`}>
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">NuestraTierraLogoCo</span>
                        <img
                            alt=""
                            src={nuestraTierraLogo}
                            className="h-16 w-auto rounded-full"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                    type="button"
                    onClick={handleMobileMenu}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    { navigationItems.map((item) => (
                    <Link key={item.name} to={item.to} className="text-sm/6 font-semibold text-blueText hover:text-[#336f85] cursor-pointer">
                        {item.name}
                    </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    { firstName  ? 
                    ( <Link to="mi-cuenta" className="text-sm/6 font-semibold text-[#033649]">
                        Hola, {firstName} 👋 
                        </Link>
                        ) :
                    ( location.pathname !== "/auth" && (
                        <Link to="auth" className="text-sm/6 font-semibold text-[#033649]">
                            Mi Cuenta <span aria-hidden="true">&rarr;</span>
                        </Link>
                        )
                    )
                    }
                </div>
            </nav>
        </>
    )
}