"use client";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import AlertSuccess from "../ui/AlertSuccess";
import AlertError from "../ui/AlertError";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormProps {
  selectedPlan?: string | undefined;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  plan: string;
  help: string;
}

const Form: React.FC<FormProps> = ({ selectedPlan }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    plan: selectedPlan || "",
    help: "",
  });

  const [sending, setSending] = useState<boolean>(false);
  const [isSendTrue, setIsSendTrue] = useState<boolean>(false);
  const [isSendFalse, setIsSendFalse] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePlanChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, plan: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "agus-prueba",
        "template_n8jmzvk",
        e.currentTarget,
        "c35DvJhbFaosvgQp6"
      )
      .then(
        () => {
          setIsSendTrue(true);
          setIsSendFalse(false);
        },
        () => {
          setIsSendFalse(true);
          setIsSendTrue(false);
        }
      )
      .finally(() => {
        setSending(false);
        setFormData({ name: "", email: "", phone: "", plan: "", help: "" });
      });
  };

  const handleCloseErrorAlert = () => {
    setIsSendFalse(false);
  };

  const handleCloseSuccessAlert = () => {
    setIsSendTrue(false);
  };

  return (
    <div className="items-center mx-auto w-full py-4 flex justify-center relative">
      <div className="flex flex-col">
        <div className="2xl:w-[550px] xl:w-[500px] lg:w-[450px] md:w-[380px] sm:w-[300px] w-[300px] rounded-lg text-white flex justify-start">
          <form
            className="flex flex-col gap-y-6 w-[550px] pb-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                className="block text-[16px] font-medium pb-2"
                htmlFor="name"
              >
                Nombre <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-[16px] font-medium pb-2"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-[16px] font-medium pb-2"
                htmlFor="phone"
              >
                Teléfono <span className="text-red-500">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-[16px] font-medium pb-2"
                htmlFor="plan"
              >
                ¿En qué plan estabas interesado?{" "}
                <span className="text-red-500">*</span>
              </label>
              <Select required name="plan" value={formData.plan}>
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder="Seleccioná un plan"
                    onChange={handlePlanChange}
                  />
                </SelectTrigger>
                <SelectContent id="plan">
                  <SelectGroup>
                    <SelectItem value="Silver">Silver</SelectItem>
                    <SelectItem value="Gold">Gold</SelectItem>
                    <SelectItem value="Platinium">Platinum</SelectItem>
                    <SelectItem value="Undefined">
                      Todavía no me decidí
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="pb-2">
              <label
                className="block text-[16px] font-medium pb-2"
                htmlFor="help"
              >
                ¿En qué podemos ayudarte?
              </label>
              <Textarea
                id="help"
                name="help"
                value={formData.help}
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="hover:bg-[#864ad4] bg-white text-[#864ad4] hover:text-white w-fit mx-auto text-xl px-6 py-2 h-fit shadow-xl"
              disabled={sending}
            >
              {sending ? "Enviando..." : "Enviar"}{" "}
            </Button>
            {isSendTrue && <AlertSuccess onClose={handleCloseSuccessAlert} />}
            {isSendFalse && <AlertError onClose={handleCloseErrorAlert} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
