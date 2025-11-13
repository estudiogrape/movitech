"use client";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import Image from "next/image";
import Chevron from "@/public/img/chevron.png";
import Link from "next/link";
import Renquip1 from "@/public/img/renquip1.png";
import Renquip2 from "@/public/img/renquip2.png";
import Pontos from "@/public/img/pontos.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SeguirRedes from "@/app/parts/Componentes/SeguirRedesSociais";
import Missao from "@/app/parts/Componentes/Missao";
import Estrutura from "@/app/parts/Componentes/Estrutura";
import Valores from "@/app/parts/Componentes/Valores";
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

export default function QuemSomos() {
  return (
    <>
      <HeaderTitle
        title="Quem Somos"
        text="text-orange-400"
        backgroundClass="bg-trueGray-601"
      />
      <div className="bg-white h-full bg-cover bg-center py-10">
        <div className="container mx-auto px-4 relative" id="quemsomos">
          <div className="grid gap-6 lg:grid-cols-2 items-start justify-center">
            <motion.div
              className="order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="text-sm md:text-xl lg:text-2xl xl:text-3xl lg:px-6 px-0 text-black font-light grid gap-6 lg:gap-4 2xl:gap-6">
                <motion.div
                  className="flex items-center gap-6 md:gap-10"
                  variants={fadeInUp}
                >
                  <p className="text-orange-400 text-md md:text-xl lg:text-2xl xl:text-4xl font-semibold text-start">
                    RENQUIP Log
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

                {[
                  "A Renquip é uma empresa especializada em locação de equipamentos, transporte rodoviário de cargas, além de oferecer soluções completas que unem tecnologia, segurança e eficiência.",
                  "Com ampla experiência no setor e uma equipe técnica altamente qualificada, a Renquip se destaca pela qualidade dos equipamentos, agilidade no atendimento e comprometimento com o sucesso dos clientes.",
                  "Atuamos em todo território nacional, atendendo empresas de mais variados segmentos, com foco em parcerias sólidas, confiança e resultado.",
                ].map((text, index) => {
                  const palavras = text.split(/(Renquip)/);

                  return (
                    <motion.p
                      key={index}
                      className="text-trueGray-500 text-xs md:text-base lg:text-sm xl:text-xl 2xl:text-2xl hover:text-zinc-600 transition duration-300 ease-in-out text-justify "
                      variants={fadeInUp}
                    >
                      {palavras.map((palavra, i) =>
                        palavra === "Renquip" ? (
                          <strong key={i} className="font-bold">
                            {palavra}
                          </strong>
                        ) : (
                          palavra
                        )
                      )}
                    </motion.p>
                  );
                })}
                <div className="flex justify-between items-center">
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href="">
                      <button className="flex items-center justify-center gap-3 bg-trueGray-601 text-white py-2 px-6 md:px-6 lg:px-12 rounded-full text-xs md:text-base lg:text-lg font-medium uppercase transition duration-300 ease-in-out hover:bg-zinc-600">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4"
                        />
                        entrar em contato
                      </button>
                    </Link>
                  </motion.div>
                  <Image
                    src={Pontos}
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
              </div>
            </motion.div>

            <motion.div
              className="order-1 w-full"
              id="planos"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="flex place-items-center flex-col items-stretch h-full w-full lg:gap-6 xl:gap-8">
                <Image
                  src={Renquip1}
                  alt="imagem1"
                  className="w-auto h-auto md:w-full md:h-full pb-4 md:pb-6 lg:pb-0"
                />
                <Image
                  src={Renquip2}
                  alt="imagem2"
                  className="w-auto h-auto md:w-full md:h-full"
                />
              </div>
              <div className="bg-orange-400 flex items-start py-2 md:py-4 w-[12rem] md:w-[25rem]"></div>
            </motion.div>
          </div>
        </div>
      </div>
      <Estrutura />
      <Missao />
      <SeguirRedes />
      <Valores />
    </>
  );
}
