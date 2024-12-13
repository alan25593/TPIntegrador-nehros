import { Link as ScrollLink } from "react-scroll";
import DrawerWithForm from "../ui/DrawerWithForm";
import DarkModeButton from "../ui/DarkModeButton";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between text-[#9747FF] p-4">
      <div>
        <p>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/images/logo.svg"
            alt="Logo"
            className="xl:w-[200px] lg:w-[175px] w-[140px]"
          />
        </p>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex items-center xl:space-x-6 lg:space-x-4 space-x-2">
          <ScrollLink
            className="font-semibold xl:text-xl lg:text-lg md:text-base text-sm xl:px-5 lg:px-3 px-2 cursor-pointer"
            to="services"
            smooth={true}
            duration={1000}
            offset={0}
          >
            Servicios
          </ScrollLink>
          <ScrollLink
            className="font-semibold xl:text-xl lg:text-lg md:text-base text-sm xl:px-5 lg:px-3 px-2 cursor-pointer"
            to="aboutus"
            smooth={true}
            duration={1000}
            offset={0}
          >
            Quiénes somos
          </ScrollLink>
          <ScrollLink
            className="font-semibold xl:text-xl lg:text-lg md:text-base text-sm xl:px-5 lg:px-3 px-2 cursor-pointer"
            to="proyects"
            smooth={true}
            duration={1000}
            offset={0}
          >
            Proyectos
          </ScrollLink>
          <ScrollLink
            className="font-semibold xl:text-xl lg:text-lg md:text-base text-sm xl:px-5 lg:px-3 px-2 cursor-pointer"
            to="pricing"
            smooth={true}
            duration={1000}
            offset={0}
          >
            Planes
          </ScrollLink>
          <DrawerWithForm
            stylesButton="flex justify-start"
            buttonVariant={"charlemos"}
          />
        </div>
      </div>
      <div>
        <DarkModeButton />
      </div>
    </nav>
  );
};

export default Navbar;
