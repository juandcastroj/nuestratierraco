import { Dialog, DialogPanel } from '@headlessui/react'
import nuestraTierraLogoMobile from '../../assets/images/logo/logo.png'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function NavbarMobile({ navigationItems, handleMobileMenu, mobileMenuOpen, setMobileMenuOpen }) {

    return(
        <>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />

                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-[#78ecac] to-[#59d0e9] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#033649]/10">
                    <div className="flex items-center justify-between">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">NuestraTierra logo</span>
                        <img
                        alt="logo corpo"
                        src={nuestraTierraLogoMobile}
                        className="h-14 w-auto rounded-full"
                        />
                    </Link>
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
                            {navigationItems.map(item => {
                                const isActive = location.pathname === item.to;
                                return (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`-mx-3 block rounded-lg px-6 py-3 text-2xl font-semibold animate-jump-in
                                    ${isActive ? "text-[#458ea8]" : "text-blueText hover:text-[#458ea8]"}`}
                                >
                                    {item.name}
                                </Link>
                                );
                            })}
                        </div>

                        <div className="py-20">
                            <Link
                                to="/auth"
                                onClick={handleMobileMenu}
                                className="text-center sm:text-left -mx-3 block rounded-lg px-6 py-2.5 text-2xl font-semibold text-black hover:text-[#336f85] border-2 border-white hover:bg-white/80"
                            >
                                Mi Cuenta  
                            </Link>
                        </div>
                    </div>
                    </div>
                </DialogPanel>

            </Dialog>
        </>
    )
}