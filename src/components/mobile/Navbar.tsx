"use client";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Link as ScrollLink, scroller } from "react-scroll";
import Image from "next/image";
import DarkModeButton from "../ui/DarkModeButton";

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const handleNavLinkClickProyectos = () => {
    toggleMobileNav();
    scroller.scrollTo("proyectos", {
      duration: 500,
      delay: 1000,
      offset: -64,
      smooth: "easeInOutQuart",
    });
  };

  const handleNavLinkClickPlan = () => {
    toggleMobileNav();
    scroller.scrollTo("plan", {
      duration: 500,
      delay: 1000,
      offset: -64,
      smooth: "easeInOutQuart",
    });
  };

  const handleNavLinkClickServicios = () => {
    toggleMobileNav();
    scroller.scrollTo("servicios", {
      duration: 500,
      offset: -64,
      delay: 1000,

      smooth: "easeInOutQuart",
    });
  };

  const handleNavLinkClickNosotros = () => {
    toggleMobileNav();
    scroller.scrollTo("nosotros", {
      duration: 500,
      offset: -64,
      delay: 1000,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <header className="sticky top-0 inset-x-0 p-6 bg-primario z-50">
      <nav className="container mx-auto">
        <div className="flex flex-auto items-center justify-between h-4">
          <motion.button
            initial="hide"
            animate={mobileNav ? "show" : "hide"}
            onClick={toggleMobileNav}
            className="flex flex-col space-y-1 relative z-10"
          >
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: 45,
                  y: 5,
                },
              }}
              className="w-6 bg-white h-px block"
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  opacity: 1,
                },
                show: {
                  opacity: 0,
                },
              }}
              className="w-6 bg-white h-px block"
            ></motion.span>
            <motion.span
              variants={{
                hide: {
                  rotate: 0,
                },
                show: {
                  rotate: -45,
                  y: -5,
                },
              }}
              className="w-6 bg-white h-px block"
            ></motion.span>
          </motion.button>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/images/logowhite.svg"
            alt="Logo White"
            className="w-[120px]"
          />
          <DarkModeButton />
        </div>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: "spring",
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: "-100%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "afterChildren",
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: "0%",
                    transition: {
                      type: "spring",
                      bounce: 0.1,
                      when: "beforeChildren",
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-primario p-6 flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6"
                >
                  <li>
                    <ScrollLink
                      className="text-5xl font-semibold text-white cursor-pointer"
                      to="servicios"
                      smooth={true}
                      duration={100}
                      offset={0}
                      onClick={() => handleNavLinkClickServicios()}
                    >
                      Servicios
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="text-5xl font-semibold text-white cursor-pointer"
                      to="Nosotros"
                      smooth={true}
                      duration={100}
                      offset={0}
                      onClick={() => handleNavLinkClickNosotros()}
                    >
                      Nosotros
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="text-5xl font-semibold text-white cursor-pointer"
                      to="Proyectos"
                      smooth={true}
                      duration={100}
                      offset={0}
                      onClick={() => handleNavLinkClickProyectos()}
                    >
                      Proyectos
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="text-5xl font-semibold text-white cursor-pointer"
                      to="Plan"
                      smooth={true}
                      duration={100}
                      offset={0}
                      onClick={() => handleNavLinkClickPlan()}
                    >
                      Planes
                    </ScrollLink>
                  </li>
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-white/30"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: "25%",
                      opacity: 0,
                    },
                    show: {
                      y: "0%",
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4"
                >
                  {/* <li>
                    <div className="bg-white rounded-lg w-8 h-8"></div>
                  </li>
                  <li>
                    <div className="bg-white rounded-lg w-8 h-8"></div>
                  </li>
                  <li>
                    <div className="bg-white rounded-lg w-8 h-8"></div>
                  </li> */}
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/images/logowhite.svg"
                    alt="Logo White"
                    className="w-[200px]"
                  />
                </motion.ul>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
