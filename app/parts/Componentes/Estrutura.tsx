"use client";
import PontosWhite from "@/public/img/pontos-white.png";
import Transporte from "@/public/img/quem-somos.png";
import Image from "next/image";
import Chevron from "@/public/img/chevron.png";
import Link from "next/link";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default function Estrutura() {
  return (
    <div className="py-10 bg-trueGray-601">
      <div className="container mx-auto px-4 relative" id="estrutura">
        <div className="grid gap-4 md:gap-10 lg:grid-cols-2 items-start justify-center">
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <div className="text-sm md:text-xl lg:text-2xl xl:text-3xl text-black font-light grid gap-6 lg:gap-4 xl:gap-6">
              <motion.div
                className="flex items-center gap-6 md:gap-10 mb-2 md:mb-6"
                variants={fadeInUp}
              >
                <p className="text-orange-400 text-sm md:text-base lg:text-xl xl:text-3xl font-semibold text-start">
                  Nossa Estrutura
                </p>
                <Image
                  src={Chevron}
                  alt=""
                  className="w-auto
  max-w-[40px]
  sm:max-w-[50px]
  md:max-w-[60px]
  lg:max-w-[70px]
  xl:max-w-[80px]
  2xl:max-w-[90px]
  h-auto "
                />
              </motion.div>
            </div>

            <motion.div className="mb-6" variants={fadeInUp}>
              <p className="text-white text-xs md:text-lg lg:text-base xl:text-xl 2xl:text-2xl hover:text-zinc-300 transition duration-300 ease-in-out pb-2 md:pb-4">
                Possuímos uma base operacional com acesso direto a BR-101, o que facilita o acessos de nossos veículos, equipamentos e a disponibilidade para os nossos clientes.
              </p>
              <p className="text-white text-xs md:text-lg lg:text-base xl:text-xl 2xl:text-2xl hover:text-zinc-300 transition duration-300 ease-in-out">
                Temos em nossa lista de equipamentos Guindastes (com capacidade de 90 toneladas a 250 toneladas), Muncks, PTA (Plataforma Elevatória), Carretas carga seca e Pranchas, Cavalos mecânicos e empilhadeiras.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 md:gap-10 mb-2 md:mb-6"
              variants={fadeInUp}
            >
              <p className="text-orange-400 text-sm md:text-base lg:text-xl xl:text-3xl font-semibold text-start">
                Área de Atuação
              </p>
              <Image
                src={Chevron}
                alt=""
                className="w-auto
  max-w-[40px]
  sm:max-w-[50px]
  md:max-w-[60px]
  lg:max-w-[70px]
  xl:max-w-[80px]
  2xl:max-w-[90px]
  h-auto "
              />
            </motion.div>

            <motion.div className="mb-6" variants={fadeInUp}>
              <p className="text-white text-xs md:text-lg lg:text-base xl:text-xl 2xl:text-2xl hover:text-zinc-300 transition duration-300 ease-in-out">
                Estamos preparados para atuar em diversas áreas: industrial, construção civil, onshore, offshore e serviços.
              </p>
            </motion.div>
            <div className="flex justify-between items-end xl:mt-10 2xl:mt-28">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="">
                  <button className="flex items-center justify-center gap-3 bg-orange-400 text-white py-2 px-6 md:px-6 lg:px-12 rounded-full text-xs md:text-base lg:text-lg font-medium uppercase transition duration-300 ease-in-out hover:bg-orange-500">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4"
                    />
                    entrar em contato
                  </button>
                </Link>
              </motion.div>

              <Image
                src={PontosWhite}
                alt="imagem pontilhada"
                className="w-auto
  max-w-[40px]
  sm:max-w-[50px]
  md:max-w-[60px]
  lg:max-w-[70px]
  xl:max-w-[80px]
  2xl:max-w-[90px]
  h-auto "
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src={Transporte}
              alt="imagem1"
              className=" h-auto w-full md:h-full pt-6 pb-4 md:pb-0 md:pt-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
