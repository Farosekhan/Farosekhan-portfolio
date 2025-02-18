import img from '../assets/Faroseport.png';
import "../index.css"; // Import your CSS file

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20 animate-slide-up">
        <div className="flex flex-col gap-y-4 lg:flex-row w-full max-w-7xl mx-auto p-8">
          {/* Left Side - Text */}
          <div className="flex-1 flex flex-col justify-center space-y-6 pr-8">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl gap-4 lg:text-5xl md:text-4xl animate-slide-up">
              <span className="block ">I'm Farose Khan,&#128512; </span>
              <span className="block"><span className='font-serif font-red'>Mernstack</span> Developer,</span>
              <span className="block">From India  &#x1F389;</span>
            </h1>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={img} // Replace with your image URL
              alt="About Me"
              className="w-full h-auto rounded-lg shadow-lg animated-border" // Add the animated-border class here
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;