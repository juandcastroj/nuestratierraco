import { useState } from 'react'
import { navBarItems } from '../constants/navbarItems'
import NavbarDesktop from './navbar/NavbarDesktop.tsx'
import NavbarMobile from './navbar/NavbarMobile.tsx'

export default function Header() {
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenuOpen(prev => !prev)
    }

    return ( 
      <header className="fixed inset-x-0 top-0 z-50 font-OpunMai">
        <NavbarDesktop navigationItems={navBarItems} handleMobileMenu={handleMobileMenu} />
        <NavbarMobile navigationItems={navBarItems} handleMobileMenu={handleMobileMenu} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      </header>
    );
}
