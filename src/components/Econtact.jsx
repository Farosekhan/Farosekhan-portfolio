import { FaGithub,FaInstagramSquare,FaLinkedin } from 'react-icons/fa';

const Econtact = () => {
  return (

    <> 
    <div className='bg-gray-100 w-full h-100 bg-gradient-to-r from-blue-50 to-purple-50'>
    <div className='pt-10'><h1 className='text-5xl font-bold font-serif flex justify-center mt-20'>E-Contact</h1></div>
        <div className="flex gap-5 justify-center mt-10 mb-20">
       <div className="">

      <a
        href="https://www.linkedin.com/in/farose-khan-52b338260/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
        aria-label="GitHub Profile"
      >
        <FaLinkedin className="text-3xl" />
      </a>
    </div>
    <div className="">
    <a
      href="https://github.com/Farosekhan"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="GitHub Profile"
    >
      <FaGithub className="text-3xl" />
    </a>
  </div>
  <div className="">
  <a
    href="https://www.instagram.com/farosekhan_/?next=%2F"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
    aria-label="GitHub Profile"
  >
    <FaInstagramSquare className="text-3xl" />
  </a>
</div>
</div>
</div>
</>

  );
};

export default Econtact;