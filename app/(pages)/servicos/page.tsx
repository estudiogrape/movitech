"use client";
import React from "react";
import { serviceList } from "@/app/parts/dados/contentServicos";
import Image from "next/image";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Link from "next/link";
import ContentLinks from "@/app/parts/dados/contentLinks";
import Pontos from "@/public/img/pontos-orange.png";
import Chevron from "@/public/img/chevron.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Duvidas from "@/app/parts/Componentes/Duvidas";
import Frota from "@/app/parts/Componentes/Frota";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Servicos() {
  return (
    <>
      <HeaderTitle
        title="Serviços"
        text="text-orange-400"
        backgroundClass="bg-trueGray-601"
      />

      <div className="container mx-auto px-4">
        <div className="pb-8 md:pb-[5rem]" id="servicospage">
          <div className="relative py-8 text-center">
            <h3 className="text-orange-400 text-xl md:text-2xl lg:text-4xl font-bold">
              Nossos Serviços
            </h3>
            <div className="absolute right-0 bottom-7 md:bottom-5 xl:bottom-4 2xl:bottom-3 -translate-y-1/2 ">
              <Image
                src={Chevron}
                alt=""
                className="
        max-w-[40px] sm:max-w-[50px] md:max-w-[60px]
        lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px]
        w-full h-auto object-contain
      "
              />
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:justify-between text-lg md:text-xl lg:text-base xl:text-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {serviceList.map((serviceSingle) => (
              <motion.div
                key={serviceSingle.slug}
                className="relative transition duration-300 ease-in-out hover:scale-105"
                variants={fadeInUp}
              >
                <div className="w-full gap-2 md:gap-6 hover:scale-105 transition duration-300 ease-in-out">
                  <div className="grid">
                    <Image
                      src={serviceSingle.img}
                      alt=""
                      className="w-full h-auto sm:h-full rounded-3xl object-cover"
                    />
                    <div className="p-4 2xl:p-6 md:mb-4 text-white absolute inset-0 flex flex-col justify-end gap-2 leading-none">
                      <p className="text-lg md:text-base lg:text-lg xl:text-xl font-semibold hover:text-zinc-300 transition duration-300 ease-in-out">
                        {serviceSingle.title}
                      </p>
                      <p className="text-base md:text-sm xl:text-xl font-medium hover:text-zinc-300 transition duration-300 ease-in-out">
                        {serviceSingle.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex items-center justify-center mt-5 lg:mt-10 relative">
            <div className="flex">
              <Image
                src={Pontos}
                alt=""
                className="absolute left-0 bottom-0
                                    max-w-[40px] sm:max-w-[50px] md:max-w-[60px]
                                    lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px]
                                    w-auto h-auto"
              />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div>
                <Link href={ContentLinks.whatsapp}>
                  <button className="flex items-center justify-center gap-3 rounded-full py-2 px-6 md:px-6 lg:px-12 text-trueGray-601 bg-orange-400 text-xs md:text-base lg:text-lg uppercase font-light transition duration-300 ease-in-out hover:bg-orange-500">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4"
                    />
                    quero saber mais
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Frota />
      <Duvidas />
    </>
  );
}
