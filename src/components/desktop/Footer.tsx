import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { PiMapPin, PiPhone, PiLinkedinLogo } from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-10 flex flex-col text-white h-full bg-[#9747FF] justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-evenly items-center w-full">
          <div className="text-white flex flex-col justify-start space-y-8 md:w-auto">
            <div className="flex items-center gap-x-4">
              <PiMapPin className="text-[36px]" />
              <div className="flex flex-col gap-1">
                <p className="text-[18px] leading-[24.3px] font-[200]">
                  Ubicación
                </p>
                <p className="text-[18px] leading-[24.3px] font-[400]">
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <MdOutlineMailOutline className="text-[36px]" />
              <div className="flex flex-col gap-1">
                <p className="text-[18px] leading-[24.3px] font-[200]">Email</p>
                <a
                  className="text-[18px] leading-[24.3px] font-[400]"
                  href="mailto:contacto@nehros.com"
                >
                  contacto@nehros.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <PiPhone className="text-[36px]" />
              <div className="flex flex-col gap-1">
                <p className="text-[18px] leading-[24.3px] font-[200]">
                  Teléfono
                </p>
                <p className="text-[18px] leading-[24.3px] font-[400]">
                  +54 9 11 26418438
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <PiLinkedinLogo className="text-[36px]" />
              <div className="flex flex-col gap-1">
                <p className="text-[18px] leading-[24.3px] font-[200]">Redes</p>
                <Link
                  href="https://www.linkedin.com/company/nehros-consultora-it/?viewAsMember=true"
                  target="_blank"
                >
                  <span className="text-[18px] leading-[24.3px] font-[400]">
                    Síguenos en LinkedIn
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center sm:-translate-x-6">
            <img
              src="/images/logowhite.webp"
              alt="logo blanco"
              className="h-auto w-[150px]"
            />
          </div>

          <div className="flex flex-col items-center space-y-4 text-center md:w-auto">
            <Link href="/terms" className="text-[18px]">
              Términos y Condiciones
            </Link>
            <Link href="/politics" className="text-[18px] -ml-4">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;