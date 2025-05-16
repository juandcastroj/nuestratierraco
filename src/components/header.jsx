import { useState } from 'react'
import { navBarItems } from '../constants/navbar'
import { NavbarMobile } from './navbarMobile'
import { NavbarDesktop } from './navbarDesktop'

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return ( 
        <header className="fixed inset-x-0 top-0 z-50">
            {/* <NavbarDesktop navigationItems={navBarItems} handleMobileMenu={handleMobileMenu}/>
            <NavbarMobile navigationItems={navBarItems} handleMobileMenu={handleMobileMenu} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} /> */}
        </header>
    );
}
