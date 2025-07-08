'use client';

import AnimatedNavLink from '@/components/ui/AnimatedNavLink';
import AnimatedShoppingCartNavLink from '../ui/AnimatedShoppingCartNavLink';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import links from '@/data/links';

const Navbar = () => {
  return (
    <nav role="navigation" className="w-full">
      <DesktopLinks links={links} />
      <MobileLinks links={links} />
    </nav>
  );
}

const DesktopLinks = ({ links }) => {
  return (
    <ul className="hidden mt-6 ml-3 md:ml-0 md:mt-12 md:flex md:justify-center md:space-x-4">
      {links.map((navItemEl, index) => {
        return (
          <li
            key={index}
          >
            <AnimatedNavLink link={navItemEl.href} text={navItemEl.label} />
          </li>
        )
      })}
      <li
        key="shopping_cart"
      >
        <AnimatedShoppingCartNavLink />
      </li>
    </ul>
  );
}

const MobileLinks = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:hidden">
      {/* Menu Button - Full width with button aligned to right */}
      <div className="w-full flex justify-end p-4">
        <button
          onClick={toggleMenu}
          className="text-4xl text-white focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <ul className="mt-6 justify-center items-center bg-inherit">
          {links.map((navItemEl, index) => {
            return (
              <li
                key={index}
                className="my-4 w-full text-left"
                onClick={() => setIsMenuOpen(false)} // Close menu when link is clicked
              >
                <AnimatedNavLink link={navItemEl.href} text={navItemEl.label} />
              </li>
            )
          })}
          <li
            key="shopping_cart"
            className="mt-12"
            onClick={() => setIsMenuOpen(false)} // Close menu when shopping cart is clicked
          >
            <AnimatedShoppingCartNavLink />
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar;
