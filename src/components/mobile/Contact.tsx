import DrawerWithForm from "../ui/DrawerWithForm";

const Contact = () => {
  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#2a1838]">
      <div className="px-2 py-[10%] h-full w-full mx-auto flex flex-col">
        <div className="w-full flex flex-col gap-8 pb-6">
          <h3 className="text-4xl font-bold text-[#9747FF] w-full text-center">
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
            alt="Contact Illustration"
            className="mx-auto w-[400px]"
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
