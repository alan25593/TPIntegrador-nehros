import React, { useState } from "react";
import Image from 'next/image';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const handleServiceClick = (serviceId: number) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className="w-full px-2 py-[10%] h-full bg-gray-200 bg-dibujo bg-cover bg-center dark:bg-[#34134e] dark:bg-dibujo-blanco relative">
      <div>
        <h3 className="text-center text-4xl font-bold tracking-[-0.1rem] text-[#9747FF] pb-8">
          Servicios
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="relative flex flex-col items-center">
          <div
            className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium mr-2 cursor-pointer"
            onClick={() => handleServiceClick(1)}
          >
            1
          </div>
          <Image
            src="/images/services/web.webp"
            alt="desarrollo web ico"
            width={200}
            height={200}
            className="w-[200px] mx-auto cursor-pointer"
            onClick={() => handleServiceClick(1)}
          />
          <p
            className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px] cursor-pointer"
            onClick={() => handleServiceClick(1)}
          >
            Desarrollo Web
            <br />
            <span className="text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Construcción de tu presencia online
            </span>
          </p>
          {activeService === 1 && (
            <div className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-[250px] p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-md mt-2">
              <p>Web personalizada, con envío de mails, diseños de logos, darkmode y mucho más.</p>
            </div>
          )}
        </div>
        <div className="relative flex flex-col items-center">
          <div
            className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium cursor-pointer"
            onClick={() => handleServiceClick(2)}
          >
            2
          </div>
          <Image
            src="/images/services/ux.webp"
            alt="diseño ux/ui ico"
            width={200}
            height={200}
            className="w-[200px] mx-auto cursor-pointer"
            onClick={() => handleServiceClick(2)}
          />
          <p
            className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px] cursor-pointer"
            onClick={() => handleServiceClick(2)}
          >
            Diseño UX/UI
            <br />
            <span className="text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Interfaces útiles y atractivas
            </span>
          </p>
          {activeService === 2 && (
            <div className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-[250px] p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-md mt-2">
               <p>Diseño intuitivo, responsivo &#40;apto para cualquier dispositivo&#41;, consistente y mucho más.</p>
            </div>
          )}
        </div>
        <div className="relative flex flex-col items-center">
          <div
            className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium cursor-pointer"
            onClick={() => handleServiceClick(3)}
          >
            3
          </div>
          <Image
            src="/images/services/seo.webp"
            alt="seo ico"
            width={200}
            height={200}
            className="w-[200px] mx-auto cursor-pointer"
            onClick={() => handleServiceClick(3)}
          />
          <p
            className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px] cursor-pointer"
            onClick={() => handleServiceClick(3)}
          >
            SEO
            <br />
            <span className="text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Posicionamiento en motores de búsqueda
            </span>
          </p>
          {activeService === 3 && (
            <div className="absolute z-50 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-[250px] p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-md mt-2">
              <p>Optimización on-page, palabras clave, backlinks, Google Ads y/o Meta Ads y mucho más.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
