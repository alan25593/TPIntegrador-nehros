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
import FormWithProps from "../desktop/FormWithProps";

interface DrawerWithFormProps {
  stylesButton: string;
  buttonVariant?: any;
}

const DrawerWithForm: React.FC<DrawerWithFormProps> = ({
  stylesButton,
  buttonVariant,
}) => {
  return (
    <div>
      <Drawer direction="left" dismissible={false}>
        <div className={stylesButton}>
          <Button variant={buttonVariant} asChild>
            <DrawerTrigger>¡Charlemos!</DrawerTrigger>
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
              <FormWithProps />
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerWithForm;
