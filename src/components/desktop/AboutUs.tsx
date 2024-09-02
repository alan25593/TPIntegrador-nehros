import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#2a1838] ">
      <div className="py-6 h-[500px] w-[90%] mx-auto">
        <div className="flex flex-auto items-center justify-center">
          <div className="w-full">
            <img
              alt="Laptop Illustration"
              className="mx-auto w-[600px]"
              src="/images/aboutus.webp"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="w-full pb-[7%]">
            <h3 className="xl:text-5xl text-4xl  font-bold tracking-[-0.1rem] text-[#9747FF]">
              ¿Quiénes <span className="text-transparent select-none">!</span>
              Somos?
            </h3>
            <h4 className="xl:w-[80%] w-[90%] pt-4 xl:text-[18px] text-[14px] leading-[32px] tracking-[0.26px] text-justify text-gray-500 dark:text-white">
              Somos una agencia emergente dedicada a la creación de soluciones
              integrales en diseño y desarrollo web. Nuestro equipo está
              compuesto por profesionales apasionados por la innovación y la
              creatividad digital. Nos destacamos por nuestra capacidad para
              convertir ideas en experiencias digitales de vanguardia que
              cautivan a nuestros clientes y sus audiencias.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
