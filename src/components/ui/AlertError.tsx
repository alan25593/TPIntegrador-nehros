import React, { MouseEventHandler } from "react";
import { IoClose } from "react-icons/io5";

interface AlertErrorProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const AlertError: React.FC<AlertErrorProps> = ({ onClose }) => {
  const errorMessage =
    "No se pudo enviar el correo electrónico. Por favor, inténtalo de nuevo.";

  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded-[10px] relative text-center w-[100%] mx-auto items-center flex flex-auto justify-center"
      role="alert"
    >
      <div>
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{errorMessage}</span>
      </div>
      <div>
        <button onClick={onClose} className="px-2 py-2">
          <IoClose className="h-6 w-6 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default AlertError;
