// components/MobileNav.tsx

import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icon library like Lucide

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-50 bg-white dark:bg-black shadow-md sm:hidden">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">MyApp</div>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="bg-white dark:bg-black px-4 py-2 space-y-2">
          <a href="#" className="block text-base hover:underline">
            Home
          </a>
          <a href="#" className="block text-base hover:underline">
            About
          </a>
          <a href="#" className="block text-base hover:underline">
            Services
          </a>
          <a href="#" className="block text-base hover:underline">
            Gallery
          </a>
          <a href="#" className="block text-base hover:underline">
            Blog
          </a>
          <a href="#" className="block text-base hover:underline">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
