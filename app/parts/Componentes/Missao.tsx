"use client";
import Missao1 from "@/public/img/missao.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

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

const serviceListValores = [
  {
    text: "Deus acima de tudo",
    slug: "Deus_acima",
  },
  {
    text: "Ética profissional",
    slug: "Ética_profissional",
  },
  {
    text: "Gestão humanizada",
    slug: "Gestão_humanizada",
  },
  {
    text: "Base no princípio da honra",
    slug: "Base_princípio",
  },
];

export default function Missao() {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4 relative" id="missao">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2 items-start justify-center">
          <motion.div
            className="text-sm md:text-xl lg:text-2xl xl:text-3xl text-black font-light grid gap-2 lg:gap-4 xl:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="flex gap-6 md:gap-8" variants={fadeInUp}>
              <p className="text-orange-400 text-md md:text-xl lg:text-2xl xl:text-4xl font-semibold text-start">
                Missão
              </p>
            </motion.div>
            <motion.p
              className="text-black text-xs md:text-lg lg:text-base xl:text-xl 2xl:text-3xl hover:text-zinc-600 transition duration-300 ease-in-out"
              variants={fadeInUp}
            >
              Nos tornarmos referência em excelência nos serviços aos quais nos
              propomos.
            </motion.p>
            <motion.p
              className="text-black text-xs md:text-lg lg:text-base xl:text-xl 2xl:text-3xl hover:text-zinc-600 transition duration-300 ease-in-out"
              variants={fadeInUp}
            >
              Sermos mais do que fornecedores na área de transporte e içamento
              de cargas, sendo o parceiro ideal às necessidades dos nossos
              clientes.
            </motion.p>

            <motion.div className="flex gap-6 md:gap-10" variants={fadeInUp}>
              <p className="text-orange-400 text-md md:text-xl lg:text-2xl xl:text-4xl font-semibold text-start">
                Nossos Valores
              </p>
            </motion.div>
            {serviceListValores.map((serviceSingle) => (
              <motion.div
                key={serviceSingle.slug}
                className="text-black break-words transition duration-300 ease-in-out hover:scale-105"
                variants={fadeInUp}
              >
                <div className="flex gap-2 md:gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    className="w-3 h-3 md:w-3 md:h-3 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 text-orange-400"
                  />
                  <h1 className="text-xs lg:text-base xl:text-2xl hover:text-zinc-600 transition duration-300 ease-in-out">
                    {serviceSingle.text}
                  </h1>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image src={Missao1} alt="imagem1" className=" h-auto w-full" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
