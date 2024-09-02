import React from "react";

const Services = () => {
  return (
    <div className="w-full px-6 py-10 h-full bg-gray-200 bg-dibujo bg-cover bg-center dark:bg-[#34134e] dark:bg-dibujo-blanco">
      <div>
        <h3 className="text-center text-5xl font-bold tracking-[-0.1rem] text-[#9747FF] pt-10 pb-12">
          Servicios
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-4 pb-10">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium mr-2">
            1
          </div>
          <img
            src="/images/services/web.webp"
            alt="desarrollo web ico"
            className="w-[300px] mx-auto"
          />
          <p className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px]">
            Desarrollo Web
            <br />
            <span className="lg:text-[16px] text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Construcción de tu presencia online
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium">
            2
          </div>
          <img
            src="/images/services/ux.webp"
            alt="desarrollo web ico"
            className="w-[300px] mx-auto "
          />
          <p className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px]">
            Diseño UX/UI
            <br />
            <span className="lg:text-[16px] text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Interfaces útiles y atractivas
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-[#9747FF] w-[30px] h-[30px] flex items-center justify-center text-white font-medium">
            3
          </div>
          <img
            src="/images/services/seo.webp"
            alt="desarrollo web ico"
            className="w-[300px] mx-auto "
          />
          <p className="text-center text-[20px] text-[#9747FF] font-bold tracking-[0.45px]">
            SEO
            <br />
            <span className="lg:text-[16px] text-[14px] text-center text-gray-700 dark:text-white font-[400]">
              Posicionamiento en motores de búsqueda
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
