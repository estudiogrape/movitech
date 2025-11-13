"use client";
import Gradiente from "../estrutura/gradiente";
import { serviceList } from "../dados/contentCard";
import Image from "next/image";
import Renquip1 from "@/public/img/renquip1.png";
import Renquip2 from "@/public/img/renquip2.png";
import Chevron from "@/public/img/chevron.png";
import Pontos from "@/public/img/pontos.png";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeInUp:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function QuemSomos() {
    return (
        <>
            <Gradiente classColor="bg-gradient-to-r from-trueGray-600 via-orange-400 to-trueGray-600" />
            <div className="bg-white h-full bg-cover bg-center py-8 lg:py-10 2xl:py-16">
                <div className="container mx-auto px-4 relative" id="quemsomos">
                    <div className="relative md:absolute top-0 left-0 w-full z-10">
                        <motion.div
                            className="w-full px-6 mx-auto grid md:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 -mt-[8rem] md:-mt-[13rem] lg:-mt-[18rem] lg:-mb-[10rem] xl:-mt-[17rem]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={container}
                        >
                            {serviceList.map((serviceSingle) => (
                                <motion.div
                                    key={serviceSingle.slug}
                                    className="bg-white h-full md:h-[11rem] lg:h-[14rem] text-trueGray-500 break-words rounded-3xl shadow-xl overflow-hidden flex flex-col p-4 lg:p-6 gap-2 md:gap-4 lg:gap-6 transition duration-300 ease-in-out hover:scale-105 hover:text-zinc-600"
                                    variants={fadeInUp}
                                >
                                    <div className="flex">{serviceSingle.icon}</div>
                                    <div className="flex flex-col gap-2 text-[0.6rem] md:text-[0.7rem] lg:text-base text-start">
                                        <h1 className="items-center font-bold text-orange-400">
                                            {serviceSingle.title}
                                        </h1>
                                        <h1 className="text-[0.5rem] md:text-[0.6rem] lg:text-xs xl:text-xs">
                                            {serviceSingle.text}
                                        </h1>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-2 items-start justify-center mt-[0rem] md:mt-[5rem] lg:mt-[10rem] xl:mt-[8rem]">
                        <motion.div
                            className="order-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="text-sm md:text-xl lg:text-2xl xl:text-3xl  px-0  text-black font-light grid gap-6 lg:gap-4 xl:gap-6">
                                <div className="flex gap-6 md:gap-10">
                                    <p className="text-orange-400 text-md md:text-xl lg:text-2xl xl:text-4xl font-semibold text-start">
                                        RENQUIP Log
                                    </p>
                                    <Image src={Chevron} alt="" className="max-w-[40px] sm:max-w-[50px] md:max-w-[60px]
        lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px]
        w-auto h-auto object-contain" />
                                </div>
                                <p className="text-trueGray-500 text-xs md:text-base lg:text-sm xl:text-lg 2xl:text-2xl hover:text-zinc-600 transition duration-300 ease-in-out">
                                    A RENQUIP Log, tem vasta experiencia no Transporte Rodoviário, na movimentação e no içamento de cargas. Tem em seu time profissionais qualificados para atender a sua demanda. Investimento em veículos e equipamentos de última geração, tecnologia avançada de informação e rastreio, fazem parte da nossa rotina.
                                </p>
                                <p className="text-trueGray-500 text-xs md:text-base lg:text-sm  xl:text-lg 2xl:text-2xl hover:text-zinc-600 transition duration-300 ease-in-out">
                                    A RENQUIP Log vem atuando nas principais demandas de logística Integrada do mercado brasileiro, oferecendo excelência naquilo que se propõe, soluções sustentáveis e customizadas aos nossos clientes, com total eficiência.
                                </p>
                                <div className="flex items-end justify-between  lg:mt-[1rem] xl:mt-[1rem] 2xl:mt-[2rem]  relativo">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Link href="">
                                            <button className="flex items-center justify-center gap-3 bg-trueGray-601 text-white py-2 px-6 md:px-6 lg:px-10 rounded-full text-xs md:text-base font-medium uppercase transition duration-300 ease-in-out hover:bg-zinc-600">
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                    className="w-5 h-5 md:w-3 md:h-3 lg:w-4 lg:h-4"
                                                />
                                                entrar em contato
                                            </button>
                                        </Link>
                                    </motion.div>
                                    <div className=" right-5 md:right-10 md:bottom-0 lg:bottom-3 xl:bottom-8">
                                        <Image src={Pontos} alt="imagem pontilhada" className="max-w-[40px] sm:max-w-[50px] md:max-w-[60px]
        lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px]
        w-auto h-auto object-contain" />
                                    </div>
                                </div>
                                
                                
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 flex place-items-center w-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="w-full h-full">
                                <Image
                                    src={Renquip1}
                                    alt="imagem1"
                                    className="w-full h-full pt-6 pb-4  md:pb-6 md:pt-0"
                                />
                                <Image
                                    src={Renquip2}
                                    alt="imagem2"
                                    className="w-full h-full"
                                />
                                <div className="bg-orange-400 py-2 md:py-3 xl:py-4 w-[12rem] md:w-[25rem]"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
