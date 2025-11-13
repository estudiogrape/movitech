"use client";
import Link from "next/link";
import ContentLinks from "@/app/parts/dados/contentLinks";
import {
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default function SeguirRedes() {
    return (
        <section className="bg-slide3 py-4 lg:py-8 xl:py-16 z-10 relative bg-cover bg-no-repeat">
            <div className="z-20 relative container mx-auto px-4 p-4 flex flex-col">
                <motion.h3
                    className="text-center text-white text-md md:text-3xl font-bold uppercase p-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    Siga-nos nas Redes Sociais
                </motion.h3>

                <motion.div
                    className="flex justify-center items-center gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={stagger}
                >
                    {[
                        { href: ContentLinks.instagram, icon: faInstagram },
                        { href: ContentLinks.linkedin, icon: faLinkedin },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            variants={fadeInUp}
                        >
                            <Link
                                href={item.href}
                                target="_blank"
                                className="text-white hover:text-orange-400 transition-all"
                            >
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className="w-8 h-auto lg:w-10 xl:w-14 mx-2"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
