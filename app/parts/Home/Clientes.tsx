"use client";
import React from "react";
import { serviceList } from "@/app/parts/dados/contentClientes";
import Image from "next/image";
import Pontos from "@/public/img/pontos.png";
import Chevron from "@/public/img/chevron-white.png";
import { motion, Variants } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Clientes() {
  return (
    <div className="bg-orange-400 py-0 md:py-6 lg:py-10 2xl:py-16">
      <div className="container mx-auto px-4 relative" id="clientes">
        <div className="relative py-8 text-center">
          <h3 className="text-trueGray-601 text-xl md:text-2xl lg:text-4xl font-bold">
            Clientes
          </h3>
          <div className="absolute right-0 bottom-3 md:bottom-0  -translate-y-1/2 ">
            <Image
              src={Pontos}
              alt=""
              className="
        max-w-[40px] sm:max-w-[50px] md:max-w-[60px]
        lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px]
        w-auto h-auto object-contain
      "
            />
          </div>
        </div>

        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 lg:gap-6 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {serviceList.map((serviceSingle) => (
            <motion.div
              key={serviceSingle.slug}
              className="bg-white rounded-xl md:rounded-3xl p-2 md:p-2 w-full h-[5rem] md:h-[7rem] lg:h-[8rem] xl:h-[10rem] flex items-center justify-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              variants={fadeInUp}
            >
              <div className="flex justify-center items-center h-auto w-full">
                <Image
                  src={serviceSingle.img}
                  alt=""
                  className="h-auto  w-auto px-2 lg:px-4  "
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Image src={Chevron} alt="" className="py-6 left-10 max-w-[40px] sm:max-w-[50px] md:max-w-[60px]
        lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px]
        w-auto h-auto object-contain" />
      </div>
    </div>
  );
}
