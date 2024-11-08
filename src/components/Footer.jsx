import React from 'react';
import { footerLinks } from '../constants';
import { logo } from '../assets';

const Footer = () => (
  <section className="flex flex-col items-center p-4 bg-primary bg-opacity-30 border-t border-t-[#3F3E45] relative z-[999]">
    <div className="flex flex-col items-center xs:flex-row md:justify-between mb-6 w-full">
      
      <div className="flex w-full items-center justify-center md:justify-start flex-col ss:flex-row">
        <a href={`/`}>
          <div className="flex items-center">
            <img
              className="inline object-cover h-[50px]"
              src={logo}
              alt="Arrow Up"
            />
            <h1 className="text-green-400 font-poppins font-semibold text-4xl mb-5 mr-10">
              EcoSense
            </h1>
          </div>
        </a>
        <p className="font-poppins font-normal text-white text-[16px] leading-[38px] text-center mt-2">
          Economia aliada à Sustentabilidade
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-around w-full mt-6 mb-4">
        {footerLinks.map((footerLink) => (
          <div key={footerLink.title} className="flex flex-col my-2 min-w-[120px]">
            <h4 className="font-poppins font-medium text-[20px] leading-[24px] text-white text-center">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-2 text-center">
              {footerLink.links.map((Link, index) => (
                <li
                  key={Link.name}
                  className={`font-poppins font-normal text-[14px] leading-[20px] text-white hover:text-secondary active:text-green-700 cursor-pointer ${
                    index !== footerLink.links.length - 1 ? 'mb-2' : 'mb-0'
                  }`}
                >
                  <a href={Link.link} target={Link.tab}>
                    {Link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex flex-col items-center md:flex-row md:justify-between pt-4 border-t border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[12px] leading-[20px] text-white">
        2024 EcoSense. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
