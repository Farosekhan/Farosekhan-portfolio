import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className='fixed w-full top-0 left-0 shadow-md py-4 px-4 sm:px-10 font-[sans-serif] min-h-[50px] tracking-wide bg-white z-50'>
        <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
          {/* Logo */}
          <Link to="/" className="max-sm:hidden">
            <img src="https://banner2.cleanpng.com/20180329/dpq/avi2bexj4.webp" alt="logo" className='w-36 border-2 border-amber-300' />
          </Link>
          <Link to="/" className="hidden max-sm:block">
            <img src="https://banner2.cleanpng.com/20180329/dpq/avi2bexj4.webp" alt="logo" className='w-30 border-2 border-amber-300' />
          </Link>

          {/* Toggler Button for Mobile */}
          <button
            onClick={toggleMenu}
            className='lg:hidden focus:outline-none'
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Collapsible Menu */}
          <div
            id="collapseMenu"
            className={`${isMenuOpen ? 'block' : 'hidden'} lg:block max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
          >
            {/* Close Button for Mobile Menu */}
            <button
              onClick={toggleMenu}
              className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            {/* Menu Items */}
            <ul className='lg:flex gap-x-5 max-lg:space-y-3'>
              <li className='mb-6 hidden max-lg:block'>
                <a onClick={closeMenu}>
                  <img src="https://banner2.cleanpng.com/20180329/dpq/avi2bexj4.webp" alt="logo" className='w-36' />
                </a>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link to="/" onClick={closeMenu} className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>
                  Home
                </Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link to="/home" onClick={closeMenu} className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>
                  About-Me
                </Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link to="/skills" onClick={closeMenu} className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>
                  Skills
                </Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link to="/contact" onClick={closeMenu} className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;