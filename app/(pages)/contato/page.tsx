"use client";
import HeaderTitle from "@/app/parts/estrutura/headerTitle";
import ContentLinks from "@/app/parts/dados/contentLinks";
import ContatoFormHome from "@/app/parts/Componentes/ContatoFormHome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
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

export default function Indique() {
    return (
        <>
            <HeaderTitle
                title="Contato "
                text="text-orange-400"
                backgroundClass=" bg-trueGray-601"
            />
            <section id="contato" className="py-8 md:py-16">
                <div className="flex justify-center pb-4 md:pb-0">
                    <h3 className="text-orange-400 text-xl md:text-2xl lg:text-4xl font-bold ">
                        Contato
                    </h3>
                </div>
                <div className="container mx-auto px-4" id="contato">
                    <motion.div
                        className="md:flex gap-x-8 text-black"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={stagger}
                    >
                        <motion.div className="w-full md:w-1/2" variants={fadeInUp}>
                            <div className="bg-white md:p-8 md:text-left transition duration-300 ease-in-out hover:scale-[1.01]">
                                <h3 className="font-bold pb-4 text-trueGray-700 text-base lg:text-lg xl:text-2xl md:uppercase">
                                    Possui alguma dúvida?
                                </h3>
                                <p className="text-base text-trueGray-700 hover:text-zinc-600 transition duration-300 ease-in-out">
                                    Preencha nosso formulário ou entre em contato conosco para
                                    tirar dúvidas ou falar diretamente com nossa equipe!
                                </p>
                                <ContatoFormHome />
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-full md:w-1/2 text-black rounded-xl pt-6 md:pt-0"
                            variants={fadeInUp}
                        >
                            <div className="text-md md:text-lg md:p-8">
                                <div className="text-base lg:text-lg xl:text-2xl pb-4 md:text-left">
                                    <h3 className="font-bold pb-4 text-trueGray-700 md:uppercase">
                                        Será um prazer te atender!
                                    </h3>
                                    <p className="text-base text-trueGray-700 hover:text-zinc-600 transition duration-300 ease-in-out">
                                        Envie uma mensagem em nosso WhatsApp, mande um e-mail ou
                                        faça-nos uma visita!
                                    </p>
                                </div>

                                {[{
                                    href: ContentLinks.whatsapp,
                                    icon: faWhatsapp,
                                    label: "Whatsapp:",
                                    value: ContentLinks.whatsappShow
                                }, {
                                    href: ContentLinks.email,
                                    icon: faEnvelope,
                                    label: "E-mail:",
                                    value: ContentLinks.emailShow
                                }, {
                                    href: ContentLinks.maps,
                                    icon: faLocationDot,
                                    label: "Endereço:",
                                    value: ContentLinks.address1,
                                    value2: ContentLinks.address2
                                }].map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        variants={fadeInUp}
                                    >
                                        <div className="flex justify-start items-center lg:px-2 pt-4 pb-6 rounded-lg hover:bg-gray-100 break-all text-trueGray-601 text-sm md:text-base xl:text-xl transition duration-300 ease-in-out hover:scale-105">
                                            <div className="px-4 md:px-6">
                                                <FontAwesomeIcon
                                                    icon={item.icon}
                                                    className="text-orange-400 h-10 w-10"
                                                />
                                            </div>
                                            <div>
                                                <div className="py-1 font-bold uppercase">{item.label}</div>
                                                <div className="font-light text-trueGray-700 hover:text-zinc-600">
                                                    {item.value}
                                                    {item.value2}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
