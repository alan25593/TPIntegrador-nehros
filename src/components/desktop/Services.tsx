import React from "react";

const Services: React.FC = () => {
  return (
    <div className="w-full px-6 py-10 h-full bg-gray-200 bg-dibujo bg-cover bg-center dark:bg-[#34134e] dark:bg-dibujo-blanco">
      <div>
        <h3 className="text-center text-5xl font-bold tracking-[-0.1rem] text-[#9747FF] pt-10 pb-12">
          Servicios
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10">
        <div className="relative flex flex-col items-center group">
          <div className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium mr-2">
            1
          </div>
          <img
            src="/images/services/web.webp"
            alt="desarrollo web ico"
            width={300}
            height={300}
            className="w-[300px] mx-auto"
          />
          <p className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px]">
            Desarrollo Web ALAN EN VIVO
            <br />
            <span className="lg:text-[16px] text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Construcción de tu presencia online
            </span>
          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-[250px] p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>Web personalizada, con envío de mails, diseños de logos, darkmode y mucho más.</p>
          </div>
        </div>
        <div className="relative flex flex-col items-center group">
          <div className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium">
            2
          </div>
          <img
            src="/images/services/ux.webp"
            alt="diseño ux/ui ico"
            width={300}
            height={300}
            className="w-[300px] mx-auto"
          />
          <p className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px]">
            Diseño UX/UI
            <br />
            <span className="lg:text-[16px] text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Interfaces útiles y atractivas
            </span>
          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-[250px] p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>Diseño intuitivo, responsivo &#40;apto para cualquier dispositivo&#41;, consistente y mucho más.</p>
          </div>
        </div>
        <div className="relative flex flex-col items-center group">
          <div className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium">
            3
          </div>
          <img
            src="/images/services/seo.webp"
            alt="seo ico"
            width={300}
            height={300}
            className="w-[300px] mx-auto"
          />
          <p className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px]">
            SEO
            <br />
            <span className="lg:text-[16px] text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Posicionamiento en motores de búsqueda
            </span>
          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-[250px] p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>Optimización on-page, palabras clave, backlinks, Google Ads y/o Meta Ads y mucho más.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
