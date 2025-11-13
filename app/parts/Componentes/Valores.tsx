"use client";
import Icamento from "@/public/img/valores1.png";
import Caminhao from "@/public/img/valores2.png";
import Image from "next/image";
import { serviceList } from "../dados/contentValores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";

const fadeInUp:Variants = {
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

export default function Valores() {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 relative" id="valores">
                <div className="grid gap-4 md:gap-0 lg:gap-6 md:grid-cols-2 items-stretch">
                    <motion.div
                        className="text-sm md:text-xl lg:text-2xl xl:text-3xl text-black font-light grid gap-6 lg:gap-4 xl:gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div className="flex md:gap-4 lg:gap-6" variants={fadeInUp}>
                            <p className="text-orange-400 text-md md:text-xl lg:text-2xl xl:text-4xl font-semibold text-start">
                                Valores
                            </p>
                        </motion.div>

                        <motion.p
                            className="text-black text-xs md:text-lg lg:text-base xl:text-xl 2xl:text-3xl hover:text-zinc-600 transition duration-300 ease-in-out"
                            variants={fadeInUp}
                        >
                            Buscar os objetivos pautados nos seguintes valores:
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 gap-4 justify-center items-center"
                            variants={stagger}
                        >
                            {serviceList.map((serviceSingle) => (
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
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 gap-2 lg:gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <Image
                            src={Icamento}
                            alt="imagem1"
                            className="w-full h-full md:w-auto md:h-auto lg:w-full lg:h-full"
                        />
                        <Image
                            src={Caminhao}
                            alt="imagem2"
                            className="w-full h-full md:w-auto md:h-auto lg:w-full lg:h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
