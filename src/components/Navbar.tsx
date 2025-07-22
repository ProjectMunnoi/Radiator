import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 container mx-auto sm:px-32 py-2 flex items-center justify-between bg-transparent">
      <div className="flex space-x-10 items-center">
        <h1 className="text-4xl font-bold">MyApp</h1>
        <ul className="flex space-x-8">
          <li className="hover:opacity-50 font-semibold text-xl">About</li>
          <li className="hover:opacity-50 font-semibold text-xl">Services</li>
          <li className="hover:opacity-50 font-semibold text-xl">Gallery</li>
          <li className="hover:opacity-50 font-semibold text-xl">Blog</li>
          <li className="hover:opacity-50 font-semibold text-xl">Contact</li>
        </ul>
      </div>
      <button className="px-8 py-3 text-black bg-yellow-300 font-semibold rounded">
        Book an appointment
      </button>
    </div>
  );
};

export default Navbar;
