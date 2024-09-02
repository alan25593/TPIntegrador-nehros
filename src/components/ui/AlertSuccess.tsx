import React, { MouseEventHandler } from "react";
import { IoClose } from "react-icons/io5";

interface AlertSuccessProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const AlertSuccess: React.FC<AlertSuccessProps> = ({ onClose }) => {
  const successMessage = "¡El correo electrónico se ha enviado correctamente!";

  return (
    <div
      className="bg-green-100 rounded-[10px] border border-green-400 text-green-700 px-4 py-1 w-full relative text-center items-center flex flex-auto justify-center"
      role="alert"
    >
      <div>
        <strong className="font-bold">Éxito: </strong>
        <span className="block sm:inline">{successMessage}</span>
      </div>
      <div>
        <button onClick={onClose} className="px-2 py-2">
          <IoClose className="h-6 w-6 text-green-500" />
        </button>
      </div>
    </div>
  );
};

export default AlertSuccess;
