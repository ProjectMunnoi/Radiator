import type React from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  return (
    <div className={`fixed top-0 container mx-auto flex px-32 py-2 items-center justify-between bg-transparent ${className}`}>
      <div className="flex space-x-10 items-center">
        <h1 className="text-4xl font-bold">MyApp</h1>
        <ul className="flex space-x-8">
          <li className="hover:opacity-50 font-semibold text-xl">About</li>
          <li className="hover:opacity-50 font-semibold text-xl"><a href="#services">Services</a></li>
          <li className="hover:opacity-50 font-semibold text-xl">Gallery</li>
          <li className="hover:opacity-50 font-semibold text-xl">Blog</li>
          <li className="hover:opacity-50 font-semibold text-xl">Contact</li>
        </ul>
      </div>
      <button className="px-4 py-2 lg:px-8 lg:py-3 text-black bg-yellow-300 font-semibold rounded text-nowrap">
        Book an appointment
      </button>
    </div>
  );
};

export default Navbar;
