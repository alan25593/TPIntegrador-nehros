import React from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { RxCross2 } from "react-icons/rx";
import Form from "../desktop/Form";

interface DrawerCardsProps {
  selectedPlan: string;
}

const DrawerCards: React.FC<DrawerCardsProps> = ({ selectedPlan }) => {
  return (
    <div>
      <div>
        <Drawer direction="left" dismissible={false}>
          <div>
            <Button
              asChild
              className="transition duration-300 hover:scale-105 w-[80%] mx-auto flex justify-center font-bold"
            >
              <DrawerTrigger className="block mt-6 bg-white text-[#9747FF] py-2 rounded font-bold  text-center">
                Conocer más
              </DrawerTrigger>
            </Button>
          </div>
          <DrawerContent>
            <DrawerHeader className="relative">
              <DrawerClose>
                <RxCross2 className="xl:w-10 w-8 xl:h-10 h-8 text-white md:hover:text-red-500 transition-all absolute top-2 right-4" />
              </DrawerClose>
              <DrawerTitle className="text-white text-center">
                <div>
                  <h2 className="font-bold xl:text-4xl text-3xl pt-4 leading-[58px]">
                    ¡Charlemos!
                  </h2>
                  <p className="xl:text-[19px] text-[17px] leading-[24.2px] font-[200] pt-2">
                    Acordemos una reunión para dar el primer paso.
                    <br />
                    Llevemos tu negocio a otro nivel.
                  </p>
                </div>
              </DrawerTitle>
              <DrawerDescription>
                <Form selectedPlan={selectedPlan} />
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default DrawerCards;
