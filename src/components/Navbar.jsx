import { useState } from 'react';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar border-b-[1px] border-b-[#3F3E45] bg-primary bg-opacity-30 relative z-[99999999999999999]">
      <a href={`/`}>
      <div className="flex items-center">
          <img
            className="inline object-cover h-[50px] ml-5 mr-3 mb-5"
            src={logo}
            alt="Arrow Up"
          />
          <h1 className="text-green-400 font-poppins font-semibold text-4xl md:text-7xl mb-5">
            EcoSense
          </h1>
        </div>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`hover:text-secondary active:text-terciary font-poppins font-normal cursor-pointer text-[24px] ${index === navLinks.length - 1 ? 'mr-10' : 'mr-10'} text-white`}
          >
            <a href={`/${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center relative z-[9999]">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-primary bg-opacity-70 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1 z-[9999999]">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins hover:text-secondary active:text-terciary font-normal text-center cursor-pointer text-[22px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}
              >
                <a href={`/${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
