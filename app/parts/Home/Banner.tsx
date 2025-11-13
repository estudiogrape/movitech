"use client";
import Link from "next/link";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, Variants } from "framer-motion";

const fadeInUp:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Banner() {
    return (
        <div className="bg-slide1 bg-cover bg-top bg-no-repeat w-full h-[25rem] md:h-[25rem] lg:h-[32rem] xl:h-[35rem]  relative">
            <div className="bg-slide2 bg-cover bg-center bg-no-repeat h-[25rem] w-full md:h-[25rem] lg:h-[32rem] xl:h-[35rem] relative">
                <div className="container mx-auto px-4 relative">
                    <div className="w-full items-center grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 justify-center pt-[2rem] md:pt-[3rem] ">
                        <motion.div
                            className=" flex flex-col gap-4 lg:gap-10 items-center md:items-start text-center md:text-left w-full py-10 2xl:py-16"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-xl  lg:text-3xl xl:text-4xl text-white font-bold !leading-snug">
                                Transportando e Elevando <br />
                                o Brasil
                            </h2>
                            <h2 className="text-base lg:text-xl xl:text-2xl text-orange-400 font-semibold !leading-tight">
                                Locação de equipamentos <br />
                                 e transporte rodoviário com segurança, <br />
                                agilidade e confiança.
                            </h2>
                            <motion.div
                                className="flex gap-2 mt-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link href="#planos">
                                    <button className="flex justify-center gap-2 rounded-full py-2 px-8 md:px-6 lg:px-8 bg-white text-orange-400 text-xs lg:text-base uppercase font-bold items-center transition duration-300 ease-in-out hover:text-orange-500 hover:scale-105">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="w-5 h-5 md:w-4 md:h-4 lg:w-5 lg:h-5"
                                        />
                                        tenho interesse
                                    </button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
