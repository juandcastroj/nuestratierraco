import { Dialog, DialogPanel } from '@headlessui/react'
import nuestraTierraLogoMobile from '../../assets/images/logo/logo.svg'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function NavbarMobile({ navigationItems, handleMobileMenu, mobileMenuOpen, setMobileMenuOpen }) {


    return(
        <>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />

                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-[#78ecac] to-[#59d0e9] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#033649]/10">
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
                        {navigationItems.map((item) => (
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
                            to="/auth"
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
        </>
    )
}