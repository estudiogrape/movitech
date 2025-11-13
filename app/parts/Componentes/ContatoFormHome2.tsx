"use client";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";

export interface ContatoTypes {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContatoForm() {
  const { register, handleSubmit, reset } = useForm<ContatoTypes>();
  const [message, setMessage] = useState<string>("");
  const [colorMessage, setColorMessage] = useState<string>("bg-teal-700");

  function onSubmitSend(data: ContatoTypes) {
    if (data.nome == null || data.nome.length < 3) {
      setMessage("O nome digitado não é válido");
      setColorMessage("bg-red-700");
    } else if (data.email == null || data.email.length < 5) {
      setMessage("O e-mail digitado não é válido");
      setColorMessage("bg-red-700");
    } else if (data.telefone == null || data.telefone.length < 7) {
      setMessage("O telefone digitado não é válido");
      setColorMessage("bg-red-700");
    } else if (
      !data.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setMessage("O e-mail digitado não é válido");
    } else {
      setMessage("");
      axios
        .post("/api/resend", data)
        .then(function (response) {
          if (response.data) {
            setMessage("Mensagem enviada com sucesso");
            setColorMessage("bg-teal-700");
            reset();
          } else {
            setMessage(
              "Mensagem não enviada, verifique todos os campos e tente novamente"
            );
            setColorMessage("bg-teal-700");
          }
        })
        .catch(() => setMessage("HOUVE UM ERRO AO ENVIAR A MENSAGEM"));
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitSend)} id="#canal">
      <motion.div
        className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 2xl:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {["nome", "email", "telefone"].map((field) => (
          <motion.input
            key={field}
            {...register(field as keyof ContatoTypes)}
            className={`border-2 border-trueGray-200 text-base lg:text-lg 2xl:text-xl font-light py-3 md:py-3 lg:py-4 block w-full rounded-xl placeholder-trueGray-400 outline-none px-4 transition duration-300 ease-in-out focus:ring-2 focus:ring-orange-400 focus:border-orange-400 ${
              field === "nome" ? "lg:col-span-2" : "col-span-1"
            }`}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            variants={fadeInUp}
          />
        ))}
      </motion.div>

      <motion.button
        type="submit"
        className="my-3 flex place-items-center gap-2 md:gap-4 bg-orange-400 transition-all rounded-full text-white text-xs md:text-base py-2 px-8 md:px-6 lg:px-8 font-normal uppercase hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4"
        />
        enviar dados
      </motion.button>

      {message !== "" && (
        <motion.div
          id="response-contact"
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className={`wpcf7-response-output w-full text-white text-sm md:text-base xl:text-lg my-2 p-2 uppercase text-center border-2 border-white border-dashed ${colorMessage}`}
            role="alert"
          >
            {message}
          </div>
        </motion.div>
      )}
    </form>
  );
}
