"use client";
import Frota1 from "@/public/img/frota1.png";
import Image from "next/image";
import { serviceList } from "../dados/contentFrota";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck, faPhone } from "@fortawesome/free-solid-svg-icons";
import Chevron from "@/public/img/chevron.png";
import Link from "next/link";
import ContentLinks from "@/app/parts/dados/contentLinks";
import Pontos from "@/public/img/pontos-white.png";
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
            staggerChildren: 0.15,
        },
    },
};

export default function Frota() {
    return (
        <div className="py-10 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid gap-4 lg:gap-6 md:grid-cols-2 items-stretch">
                    <motion.div
                        className="text-sm md:text-xl lg:text-2xl xl:text-3xl text-white font-light grid gap-6 lg:gap-4 xl:gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div className="flex gap-6 md:gap-10 place-items-center" variants={fadeInUp}>
                            <p className="text-orange-400 text-md md:text-xl lg:text-2xl xl:text-4xl font-semibold text-start">
                                Frota RENQUIP
                            </p>
                            <Image src={Chevron} alt="" className="w-auto
  max-w-[40px]
  sm:max-w-[50px]
  md:max-w-[60px]
  lg:max-w-[70px]
  xl:max-w-[80px]
  2xl:max-w-[90px]
  h-auto " />
                        </motion.div>

                        <motion.p
                            className="text-xs md:text-sm xl:text-lg 2xl:text-2xl hover:text-zinc-300 transition duration-300 ease-in-out"
                            variants={fadeInUp}
                        >
                            Temos em nossa frota, todos os principais equipamentos e veículos
                            para atender a sua demanda em todos os tipos de operações de carga.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 gap-4 justify-center items-center"
                            variants={stagger}
                        >
                            {serviceList.map((serviceSingle) => (
                                <motion.div
                                    key={serviceSingle.slug}
                                    className="text-white break-words transition duration-300 ease-in-out hover:scale-105"
                                    variants={fadeInUp}
                                >
                                    <div className="flex gap-2 md:gap-3 items-center">
                                        <FontAwesomeIcon
                                            icon={faSquareCheck}
                                            className="w-3 h-3 md:w-3 md:h-3 lg:w-5 lg:h-5 text-orange-400"
                                        />
                                        <h1 className="text-xs xl:text-lg hover:text-zinc-300 transition duration-300 ease-in-out">
                                            {serviceSingle.text}
                                        </h1>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="flex relative mt-4">
                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link href={ContentLinks.whatsapp}>
                                    <button className="flex items-center justify-center gap-3 rounded-full py-2 px-6 md:px-6 lg:px-12 text-trueGray-601 bg-orange-400 text-xs md:text-base lg:text-lg uppercase font-light transition duration-300 ease-in-out hover:bg-orange-500">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4"
                                        />
                                        entrar em contato
                                    </button>
                                </Link>
                            </motion.div>

                            <div className="flex justify-end absolute right-0">
                                <Image src={Pontos} alt="" className="w-auto
  max-w-[40px]
  sm:max-w-[50px]
  md:max-w-[60px]
  lg:max-w-[70px]
  xl:max-w-[80px]
  2xl:max-w-[90px]
  h-auto " />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className=""
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Image src={Frota1} alt="imagem1" className="w-full h-auto" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
