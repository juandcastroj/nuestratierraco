import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel } from '@headlessui/react'
import { navBarItems } from '../constants/navbar'
import nuestraTierraLogo from '../assets/images/logo/logo.png'
import nuestraTierraLogoMobile from '../assets/images/logo/logo.svg'

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [hasBackground, setHasBackground] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

      useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          setHasBackground(currentScrollY > 80);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return ( 
        <header className="fixed inset-x-0 top-0 z-50">

          {/* DESKTOP NAVBAR */}
          <nav aria-label="Global" className={`flex items-center justify-between py-2 px-6 lg:px-8 animate-fade-down animate-duration-[2500ms] animate-delay-[250ms]
                        ${
                          hasBackground ? "bg-white/30 shadow-md backdrop-blur-sm" 
                            : "bg-transparent"
                        }`}>
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">NuestraTierraLogoCo</span>
                <img
                  alt=""
                  src={nuestraTierraLogo}
                  className="h-14 w-auto rounded-full"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navBarItems.map((item) => (
                <Link key={item.name} to={item.to} className="text-sm/6 font-semibold text-[#033649] cursor-pointer hover:text-[#336f85]">
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="login" className="text-sm/6 font-semibold text-[#033649]">
                Mi Cuenta <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>

          {/* MOBILE NAVBAR */}
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-[#81dfab] to-[#54b9ce] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#033649]/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src={nuestraTierraLogoMobile}
                    className="h-14 w-auto rounded-full"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="text-center sm:text-left -my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navBarItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={handleMobileMenu}
                        className="-mx-3 block rounded-lg px-6 py-3 text-lg font-semibold text-[#033649] hover:text-[#336f85]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      to="/login"
                    onClick={handleMobileMenu}
                      className="text-center sm:text-left -mx-3 block rounded-lg px-6 py-2.5 text-base/7 font-semibold text-[#033649] hover:text-[#336f85]"
                    >
                      Mi Cuenta  
                    </Link>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>

        </header>
    );
}
