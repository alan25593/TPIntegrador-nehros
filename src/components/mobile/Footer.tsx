import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiMapPin, PiPhone, PiLinkedinLogo } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-10 flex flex-col md:flex-row text-white h-full bg-[#9747FF] justify-center items-center">
      <div className="text-white flex flex-col justify-start">
        <div className="flex flex-col gap-6 xl:w-[550px] lg:w-[450px] w-[375px] p-8">
          <div className="flex items-center gap-x-8">
            <PiMapPin className="xl:text-[36px] text-[34px]" />
            <div className="flex flex-col gap-1">
              <p className="xl:text-[18px] text-[16px] leading-[24.3px] font-[200]">
                Ubicación
              </p>
              <p className="xl:text-[18px] text-[16px] leading-[24.3px] font-[400]">
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <MdOutlineMailOutline className="xl:text-[36px] text-[34px]" />
            <div className="flex flex-col gap-1">
              <p className="xl:text-[18px] text-[16px] leading-[24.3px] font-[200]">
                Email
              </p>
              <a
                className="xl:text-[18px] text-[16px] leading-[24.3px] font-[400]"
                href="mailto:contacto@nehros.com"
              >
                contacto@nehros.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <PiPhone className="xl:text-[36px] text-[34px]" />
            <div className="flex flex-col gap-1">
              <p className="xl:text-[18px] text-[16px] leading-[24.3px] font-[200]">
                Teléfono
              </p>
              <p className="xl:text-[18px] text-[16px] leading-[24.3px] font-[400]">
                +54 9 11 26418438
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <PiLinkedinLogo className="xl:text-[36px] text-[34px]" />
            <div className="flex flex-col gap-1">
              <p className="xl:text-[18px] text-[16px] leading-[24.3px] font-[200]">
                Redes
              </p>
              <Link
                href="https://www.linkedin.com/company/nehros-consultora-it/?viewAsMember=true"
                target="blank"
              >
                <span className="xl:text-[18px] text-[16px] leading-[24.3px] font-[400]">
                  Síguenos en LinkedIn
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-10 items-center mt-8 md:mt-0">
        <img src="/images/logowhite.webp" alt="logo blanco" />
      </div>
      <div className="text-sm flex flex-auto gap-6 items-center text-center pt-8">
        <div><span className="font-bold">DevOps: </span><br /> 
        <Link href="https://www.linkedin.com/in/alan-lampert/"target="blank">
        Alan Lampert</Link></div>     
        <hr className="w-[2px] bg-white h-[40px]" />
        <div><span className="font-bold">Principal Developer: </span><br /> 
        <Link href="https://www.linkedin.com/in/franco-avolio/"target="blank">
        Franco Avolio</Link></div>
        <hr className="w-[2px] bg-white h-[40px]" />
        <div><span className="font-bold">Founder: </span><br /> 
        <Link href="https://www.linkedin.com/in/agustin-araneo/"target="blank">
        Agustín Araneo</Link></div>
      </div>
      <div className="flex flex-col items-center mt-8 md:mt-0 md:w-1/3 p-8">
        <Link href="/terms" className="text-[16px] xl:text-[18px] mb-4 ml-4">
          Términos y Condiciones
        </Link>
        <Link href="/politics" className="text-[16px] xl:text-[18px]">
          Política de Privacidad
        </Link>
      </div>

    </div>
  );
};

export default Footer;
