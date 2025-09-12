import { Dialog, DialogPanel, Disclosure } from '@headlessui/react'
import nuestraTierraLogoMobile from '../../assets/images/logo/logo.png'
import { XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

export default function NavbarMobile({ navigationItems, handleMobileMenu, mobileMenuOpen, setMobileMenuOpen }) {
  const location = useLocation();

  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-black/50" /> {/* backdrop */}

      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blueText px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[#033649]/10 animate-fade-left">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5">
            <span className="sr-only">NuestraTierra logo</span>
            <img
              alt="logo corpo"
              src={nuestraTierraLogoMobile}
              className="h-20 w-auto rounded-full"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-[#9fffcb] hover:text-gray-100"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-10" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col min-h-screen">
          <div className="flex-1 overflow-y-auto">
            {/* Contenedor con divide-y */}
            <div className="text-center sm:text-left py-20 divide-y divide-gray-300/20">

              {navigationItems.map(item => {
                const isActive = location.pathname === item.to;
                // Caso con subItems → Acordeón
                if (item.subItems) {
                  return (
                    <Disclosure key={item.name} as="div" className="px-3 py-2">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-center rounded-lg py-2 text-xl font-semibold text-[#9fffcb] hover:text-white">
                            {item.name}
                            <ChevronDownIcon
                              className={`h-6 w-6 mx-1 transition-transform ${open ? "rotate-180" : ""}`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="ml-4 mt-2 space-y-2 divide-y divide-gray-500/10">
                            {item.subItems.map(sub => {
                              const isSubActive = location.pathname === sub.to;
                              return (
                                <Link
                                  key={sub.name}
                                  to={sub.to}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block rounded-lg px-4 py-2 text-lg font-medium
                                    ${isSubActive ? "text-white" : "text-[#9fffcb] hover:text-white"}`}
                                >
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  );
                }

                // Caso normal → Link directo
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`-mx-3 block rounded-lg px-6 py-2 text-xl font-medium
                      ${isActive ? "text-white" : "text-[#b2e6c9] hover:text-white"}`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Cuenta sticky al fondo con separador arriba */}
          <div className="sticky bottom-0 py-6 border-t border-gray-300">
            <Link
              to="/account"
              onClick={handleMobileMenu}
              className="text-center sm:text-left mx-12 block rounded-lg px-6 py-2.5 text-xl font-semibold text-[#9fffcb] border-2 border-gray-300/50 hover:border-[#458ea8] hover:text-white"
            >
              Mi Cuenta
            </Link>
          </div>
        </div>



      </DialogPanel>
    </Dialog>
  )
}
