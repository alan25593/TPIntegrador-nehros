"use client";
import React, { Component, RefObject } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RxOpenInNewWindow } from "react-icons/rx";

const projects = [
  {
    id: 1,
    title: "AutoCirculo",
    descripcion:
      "Página web diseñada y desarrollada para AutoCirculo, una reconocida concesionaria de automóviles.",
    imageUrl: "/images/proyects/autoexpert.webp",
    url: "https://www.autocirculoexpert.ar/",
  },
  {
    id: 2,
    title: "Plataforma Web AutoCirculo",
    descripcion:
      "Plataforma web personalizada creada para AutoCirculo, destinada a optimizar la gestión de la empresa. ",
    imageUrl: "/images/proyects/autocirculo.webp",
    url: "https://front-autoplanes.vercel.app/",
  },
  {
    id: 3,
    title: "Dunas 838",
    descripcion:
      "Página web diseñada para Dunas 838, un exclusivo complejo de apartamentos ubicado en Pinamar. ",
    imageUrl: "/images/proyects/dunas838.webp",
    url: "https://dunas838.vercel.app/",
  },
  {
    id: 4,
    title: "Grupo Poncho",
    descripcion:
      "Página web desarrollada para Grupo Poncho, un distinguido grupo de arquitectos que realizan obras destacadas en toda España.",
    imageUrl: "/images/proyects/poncho.webp",
    url: "https://www.grupoponcho.es/",
  },
  {
    id: 5,
    title: "Colegio Santo Cristo",
    descripcion:
      "Página web creada para el colegio Santo Cristo, dedicado a brindar educación de calidad en un entorno estimulante y seguro.",
    imageUrl: "/images/proyects/stocristo.webp",
    url: "https://www.stocristo.com.ar/",
  },
  {
    id: 6,
    title: "Etiquetalo",
    descripcion:
      "Página web creada para comercializar etiquetas de todo tipo, dar a conocer a la empresa y expandir su negocio.",
    imageUrl: "/images/proyects/etiquetalo.webp",
    url: "https://www.etiquetalo.com.ar/",
  },
];

interface SlickProps {}

interface SlickState {}

class Proyects extends Component<SlickProps, SlickState> {
  private slider1: RefObject<Slider>;

  constructor(props: SlickProps) {
    super(props);
    this.slider1 = React.createRef<Slider>();
  }

  handleArrowClick = () => {
    if (this.slider1.current) {
      this.slider1.current.slickNext();
    }
  };

  handleArrowClickPrev = () => {
    if (this.slider1.current) {
      this.slider1.current.slickPrev();
    }
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <section className="w-full py-[20%] px-2 flex justify-center text-white h-full bg-[#9747FF]">
        <div className="container px-4 relative">
          <div className="space-y-3 text-center mb-4">
            <h2 className="text-center text-4xl font-bold tracking-[-0.1rem] text-white">
              Nuestros <span className="text-transparent select-none">!</span>
              Proyectos
            </h2>
            <p className="italic text-center text-gray-300 text-[14px]">
              “No solo creamos sitios web, creamos experiencias que inspiran,
              conectan y convierten”
            </p>
          </div>
          <Slider
            ref={this.slider1}
            {...settings}
            className="w-[95%] mx-auto select-none"
          >
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col px-2 select-none">
                <img
                  alt={project.title}
                  className="object-cover select-none"
                  src={project.imageUrl}
                  style={{
                    aspectRatio: "600/400",
                    objectFit: "cover",
                  }}
                />
                <a
                  href={project.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex flex-auto items-center gap-1 -mt-6 justify-center hover:text-gray-300 transition duration-300"
                >
                  <h3 className="text-base font-semibold tracking-tight text-center  underline underline-offset-4">
                    {project.title}
                  </h3>
                  <RxOpenInNewWindow />
                </a>
                <p className="text-xs text-gray-300 text-center">
                  {project.descripcion}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}

export default Proyects;
