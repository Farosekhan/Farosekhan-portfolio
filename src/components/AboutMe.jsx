
const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8 pt-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600">
            Get to know more about who I am and what I do.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://images.prismic.io/turing/652ec07efbd9a45bcec818e8_shutterstock_1064355815_722739a3b7.webp?auto=format%2Ccompress&fit=max&w=3840" // Replace with your image URL
              alt="Profile"
              className="rounded-lg shadow-2xl w-full max-w-md"
            />
          </div>

          {/* Right Side - Text */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold font-[Playfair+Display] text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500 sm:text-2xl lg:text-5xl my-12 mx-20 flex animate-slide-up">
              Hi, I'm Farose Khan k 👋
            </h2>
            <p className="text-lg text-gray-600">
              I'm a Passionate <span className="font-semibold text-purple-600">MERN Stack Developer</span> based in India. I specialize in building modern, responsive, and user-friendly web applications. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I love turning ideas into reality through code.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee ☕.
            </p>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  JavaScript
                </span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  MongoDB
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                  Express.js
                </span>
              </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-10">
              <a
                href="#contact" // Replace with your link
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
              >
                Let's Work Together
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
