"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion, Variants } from "framer-motion";

const fadeInUp:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Duvidas() {
    return (
        <section id="duvidas" className="py-6 md:py-16">
            <div className="container mx-auto px-4">
                <motion.div
                    className="grid md:grid-cols-2 gap-2 md:gap-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.2 },
                        },
                    }}
                >
                    <motion.div className="text-black" variants={fadeInUp}>
                        <h3 className="text-orange-400 text-center lg:text-left text-xl lg:text-2xl xl:text-4xl uppercase py-4">
                            Possui alguma dúvida?
                        </h3>
                        <p className="text-center md:text-left md:text-sm lg:text-sm xl:text-lg font-light hover:text-zinc-600 transition duration-300 ease-in-out">
                            Nós temos os <span className="font-semibold">melhores equipamentos</span> para
                            o seu negócio! Entre em contato para <span className="font-semibold">tirar dúvidas</span> e fazer um <span className="font-semibold">orçamento sem compromisso!</span>
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center mt-10"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link href="/contato">
                            <button
                                type="button"
                                className="bg-orange-400 text-trueGray-600 flex items-center justify-center gap-3 font-medium rounded-full py-2 xl:py-3 px-8 md:px-10 lg:px-16 xl:px-20 text-base md:text-base lg:text-lg xl:text-2xl mx-auto uppercase transition duration-300 ease-in-out hover:bg-orange-500"
                            >
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="w-5 h-5 md:w-3 md:h-3 lg:w-8 lg:h-8"
                                />
                                entrar em contato
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
