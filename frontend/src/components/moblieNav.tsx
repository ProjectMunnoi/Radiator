import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavbarProps {
  className?: string;
}

const MobileNav: React.FC<MobileNavbarProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 bg-white dark:bg-black shadow-md ${className}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="md:text-3xl text-xl font-bold">MyApp</div>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none hover:cursor-pointer">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="bg-white dark:bg-black px-4 py-2 space-y-4">
          <a
            href="#"
            className="font-semibold block text-base hover:opacity-50">
            Home
          </a>
          <a
            href="#"
            className="font-semibold block text-base hover:opacity-50">
            About
          </a>
          <a
            href="#"
            className="font-semibold block text-base hover:opacity-50">
            <a href="#services">Services</a>
          </a>
          <a
            href="#"
            className="font-semibold block text-base hover:opacity-50">
            Gallery
          </a>
          <a
            href="#"
            className="font-semibold block text-base hover:opacity-50">
            Blog
          </a>
          <a
            href="#"
            className="font-semibold block text-base hover:opacity-50">
            Contact
          </a>
          <button className="px-4 py-2 lg:px-8 lg:py-3 text-black bg-yellow-300 font-semibold rounded text-nowrap">
            Book an appointment
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
