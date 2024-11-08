import React from 'react';
import { logo, bannerEcosense } from '../assets';

function VideoBanner({ assetsrc, pagename, whichpage, ishome }) {
  return (
    <div className="relative h-screen z-[99999]">
      {/* Background Video or Image */}
      {ishome ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bannerEcosense}
          autoPlay
          loop
          muted
        />
      ) : (
        <img 
          className="absolute inset-0 w-full h-full object-cover" 
          src={assetsrc} 
          alt="Banner Asset" 
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        {(() => {
          switch (whichpage) {
            case 1:
              return (
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                  <h1 className="text-white font-poppins font-semibold text-4xl md:text-6xl mb-5">
                    Aprenda a Economizar com a <br className="hidden sm:block" />
                  </h1>
                  <div className="flex items-center">
                    <img
                      className="inline object-cover h-[50px] mr-3 mb-5"
                      src={logo}
                      alt="Logo EcoSense"
                    />
                    <h1 className="text-green-400 font-poppins font-semibold text-4xl md:text-7xl mb-5">
                      EcoSense
                    </h1>
                  </div>
                </div>
              );
            case 2:
              return (
                <>
                  <h1 className="text-white font-poppins font-semibold text-4xl md:text-6xl mb-5">
                    Aprenda a economizar <br className="hidden sm:block" />
                  </h1>
                  <h1 className="text-green-400 font-poppins font-semibold text-4xl md:text-7xl mb-5">
                    {pagename}
                  </h1>
                </>
              );
            case 3:
              return (
                <>
                  <h1 className="text-white font-poppins font-semibold text-4xl xss:text-2xl md:text-6xl mb-5">
                    Pratique {pagename} com a <br className="hidden sm:block" />
                  </h1>
                  <div className="flex items-center">
                    <img
                      className="inline object-cover h-[50px] ml-5 mr-3 mb-5"
                      src={logo}
                      alt="Logo EcoSense"
                    />
                    <h1 className="text-green-400 font-poppins font-semibold text-4xl md:text-7xl mb-5">
                      EcoSense
                    </h1>
                  </div>
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default VideoBanner;
