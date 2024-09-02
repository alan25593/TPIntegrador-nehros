import React from "react";
import DrawerWithForm from "../ui/DrawerWithForm";

const Home = () => {
  return (
    <div className="w-full h-[90vh] py-10 bg-fondo-mobile bg-cover bg-center bg-white dark:bg-[#34134e]">
      <div className="w-[100%] flex justify-center flex-col text-[#9747FF] text-center gap-10">
        <h1 className="text-4xl font-[1000]  tracking-wide">
          CREANDO <br />
          <span className="">EXPERIENCIAS DIGITALES</span>
        </h1>
        <h4 className="pb-6 tracking-wide xl:text-[23px] lg:text-[21px] text-[19px] w-full leading-8 text-center font-medium text-[#864ad4]">
          Lanzar tu presencia online es el primer paso para llevar tu empresa a
          otro nivel
        </h4>
        <DrawerWithForm
          stylesButton="flex justify-center"
          buttonVariant={"charlemosHome"}
        />
      </div>
    </div>
  );
};

export default Home;
