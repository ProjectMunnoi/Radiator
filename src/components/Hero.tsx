import Navbar from "./Navbar";
import MobileNav from "./moblieNav";

const Hero = () => {
  return (
    <div className='relative bg-[url("src/assets/hero2.jpg")] min-h-screen w-full bg-cover bg-center flex items-center justify-center text-white'>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      <Navbar className="hidden xl:flex" />
      <MobileNav className="block xl:hidden" />
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500/50 to-purple-700 bg-clip-text text-transparent">
          Welcome to Our Website
        </h1>
        <p className="text-lg mb-8 bg-gradient-to-r from-yellow-200/50 to-yellow-300 bg-clip-text text-transparent">
          Discover amazing content and connect with us.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
