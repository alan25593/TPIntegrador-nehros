import React from "react";
import Navbar from "./Navbar";
import DrawerWithForm from "../ui/DrawerWithForm";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-fondo bg-cover bg-center bg-white dark:bg-[#34134e]">
      <Navbar />
      <div className="flex flex-auto w-full h-[70vh]">
        <div className="w-[100%] flex justify-center flex-col text-[#9747FF] px-[9.5%]">
          <h1 className="text-transparent">Nehros desarrollo web</h1>
          <h1 className="xl:text-5xl lg:text-4xl text-3xl font-[1000] py-10 tracking-wide lg:w-[100%] w-[80%]">
            CREANDO <br />
            <span className="">EXPERIENCIAS DIGITALES</span>
          </h1>
          <h4 className="pb-6 tracking-wide xl:text-[23px] lg:text-[21px] text-[19px] lg:w-[55%] w-[65%] xl:w-[47%] leading-8">
            Lanzar tu presencia online es el primer paso para llevar tu empresa
            a otro nivel
          </h4>
          <DrawerWithForm
            stylesButton="flex justify-start"
            buttonVariant={"charlemosHome"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
