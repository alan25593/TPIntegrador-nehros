import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#2a1838] relative">
      <div className="px-2 py-[10%] h-[600px] w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full z-20">
            <h3 className="text-center text-4xl font-bold tracking-[-0.1rem] text-[#9747FF]">
              ¿Quiénes <span className="text-transparent select-none">!</span>
              Somos?
            </h3>
            <h4 className="w-[90%] mx-auto pt-4 text-[14px] leading-[28px] tracking-tight text-justify text-gray-500 dark:text-white">
              Somos una agencia emergente dedicada a la creación de soluciones
              integrales en diseño y desarrollo web. Nuestro equipo está
              compuesto por profesionales apasionados por la innovación y la
              creatividad digital. Nos destacamos por nuestra capacidad para
              convertir ideas en experiencias digitales de vanguardia que
              cautivan a nuestros clientes y sus audiencias.
            </h4>
          </div>
          <div className="w-full absolute -bottom-16 z-10">
            <img
              alt="Laptop Illustration"
              className="mx-auto w-[400px]"
              src="/images/aboutus.webp"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
