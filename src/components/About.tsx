import Stats from "./Stats";

const About = () => {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center justify-between py-20">
      <Stats />
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <div className="w-md md:w-lg xl:w-xl">
          <img src="src/assets/about.jpg" alt="about_img" className="w-full" />
        </div>
        <div className="w-md md:w-lg xl:w-xl flex flex-col justify-between gap-5">
          <h2 className="text-white text-3xl font-bold">About Us</h2>
          <p className="text-white text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            corrupti odit beatae esse reiciendis ipsa atque vitae impedit
            dolores obcaecati sit qui, laudantium eligendi neque totam vero est
            molestias quaerat quibusdam iure placeat! Praesentium esse tenetur
            et nulla, adipisci natus?
          </p>
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            fugiat, incidunt mollitia saepe voluptatum nostrum, doloremque harum
            nam odit id quod repellat autem recusandae ipsum ex laudantium
            exercitationem provident repellendus corrupti nesciunt porro omnis!
            Culpa voluptatum, laudantium temporibus ratione consectetur illo sit
            quod a molestiae? Architecto inventore ipsa modi autem.
          </p>
          <button className="border border-yellow-300 px-2 py-4 text-yellow-300 bg-transparent w-50 rounded font-semibold hover:bg-yellow-300 hover:text-black transition-colors duration-300">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
