import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { navBarItems } from '../constants/navbar'
import { useAuth } from '../contexts/AuthContext'
import NavbarDesktop from './navbar/NavbarDesktop'
import NavbarMobile from './navbar/NavbarMobile'

export default function Header() {
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return ( 
      <header className="fixed inset-x-0 top-0 z-50">
        <NavbarDesktop navigationItems={navBarItems} handleMobileMenu={handleMobileMenu} />
        <NavbarMobile navigationItems={navBarItems} handleMobileMenu={handleMobileMenu} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      </header>
    );
}
