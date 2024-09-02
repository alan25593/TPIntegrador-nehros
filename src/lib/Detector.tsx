"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainMobile from "@/components/mobile/MainMobile";
import MainDesktop from "@/components/desktop/MainDesktop";

const LoadingAnimation: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primario"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.img
        src="/images/logowhite.webp"
        alt="Logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
    </motion.div>
  );
};

const MyComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <MainMobile />
          <MainDesktop />
        </div>
      )}
    </div>
  );
};

export default MyComponent;
