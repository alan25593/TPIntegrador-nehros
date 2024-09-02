import React from "react";
import Card from "../ui/Card";

const Pricing: React.FC = () => {
  const options = [
    {
      title: "Silver",
      features: [
        "Desarrollo web personalizado",
        "Diseño UX/UI (Responsive)",
        "Dominio + Hosting",
      ],
    },
    {
      title: "Gold",
      features: [
        "Todo lo incluido en el plan Silver",
        "Diseño de logo y plantillas para las redes",
        "Manual de marca personalizado",
      ],
    },
    {
      title: "Platinum",
      features: [
        "Todo lo incluido en el plan Gold",
        "Posicionamiento web SEO",
        "Google Ads y/o Meta Ads",
      ],
    },
  ];

  return (
    <div className="h-full flex items-center flex-col py-[7%] gap-20 bg-dibujo bg-cover bg-center dark:bg-dibujo-blanco dark:bg-[#34134e]">
      <div>
        <h3 className="xl:text-6xl text-4xl font-[1000] text-[#9747FF] w-full text-center tracking-wide">
          Elegí el plan que más <br />
          se adecúe a tus necesidades
        </h3>
        <h6 className="text-center text-gray-500 dark:text-gray-200 xl:text-2xl pt-2 text-xl font-medium">
          Permitinos cuidar tu sitio web mientras te concentras en tu negocio
        </h6>
      </div>
      <div className="grid grid-cols-3 xl:gap-8 lg:gap-5 gap-0">
        {options.map((option, index) => (
          <div key={index}>
            <Card
              title={option.title}
              features={option.features}
              selectedPlan={option.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
