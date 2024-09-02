import DrawerWithForm from "../ui/DrawerWithForm";

const Contact = () => {
  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#2a1838]">
      <div className="py-10 w-[80%] mx-auto flex flex-auto items-center ">
        <div className="w-full flex flex-col xl:gap-14 gap-8 pb-[7%]">
          <h3 className="xl:text-5xl text-4xl font-bold text-[#9747FF] w-full text-center">
            ¿Estás listo para empezar <br />
            tu próximo proyecto?
          </h3>
          <DrawerWithForm
            stylesButton="flex justify-center"
            buttonVariant={"primary"}
          />
        </div>
        <div className="w-full">
          <img
            alt="Laptop Illustration"
            className="mx-auto xl:w-[600px] w-[500px]"
            src="/images/contact.webp"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
