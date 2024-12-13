import React, { useState, MouseEvent } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  { name: "Agustin Araneo", role: "Co-Founder", image: "/images/equipo/agus.jfif", linkedin: "https://linkedin.com/in/agustin-araneo" },
  { name: "Franco Avolio", role: "Co-Founder", image: "/images/equipo/fran.jfif", linkedin: "https://linkedin.com/in/franco-avolio" },
  { name: "Alan Lampert", role: "Co-Founder", image: "/images/equipo/alan.jpg", linkedin: "https://linkedin.com/in/alan-lampert" },
  { name: "Marcos Salvador", role: "Analista QA", image: "/images/equipo/Marcos.jfif", linkedin: "https://www.linkedin.com/in/marcosjsalvador/" }
];

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains("modal-background")) {
      handleCloseModal();
    }
  };

  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#2a1838] relative">
      <div className="px-2 py-[10%] h-auto w-full mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full text-center z-20">
            <h3 className="text-3xl font-bold tracking-[-0.1rem] text-[#9747FF]">
              ¿Quiénes <span className="text-transparent select-none">!</span>
              Somos?
            </h3>
            <h4 className="w-[90%] mx-auto pt-4 text-[14px] leading-[28px] tracking-tight text-justify text-gray-500 dark:text-white">
              Somos una agencia emergente dedicada a la creación de soluciones
              integrales en diseño y desarrollo web. Nuestro equipo está
              compuesto por profesionales apasionados por la innovación y la
              creatividad digital. Nos destacamos por nuestra capacidad para
              convertir ideas en experiencias digitales de vanguardia que
              cautivan a nuestros clientes y sus audiencias.
            </h4>
            <h4
              className="cursor-pointer text-[#9747FF] hover:underline mt-4"
              onClick={handleOpenModal}
            >
              Conoce al Equipo ⇲
            </h4>
            {/* Redes sociales */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://instagram.com/nehros_it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C13584] hover:opacity-75"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://facebook.com/profile.php?id=61569282867203"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:opacity-75"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://linkedin.com/company/nehros-consultora-it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:opacity-75"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
          <div className="w-full mt-6">
            <img
              alt="Laptop Illustration"
              className="mx-auto w-[400px] md:w-[600px]"
              src="/images/aboutus.webp"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-background fixed inset-0 flex items-center justify-center z-50"
          onClick={handleModalClick}
        >
          <div className="modal-content bg-white dark:bg-[#2a1838] p-4 rounded-lg w-[90%] md:w-[80%] lg:w-[60%] relative">
            <button
              className="close-button absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-[#9747FF] mb-4">Conoce al Equipo</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </a>
                  <div>
                    <h5 className="text-lg font-semibold text-[#9747FF]">{member.name}</h5>
                    <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Redes sociales en el modal */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C13584] hover:opacity-75"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:opacity-75"
              >
                <FaFacebook size={32} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:opacity-75"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
