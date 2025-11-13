"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/img/logo.png";
import Image from "next/image";
import Gradiente from "./gradiente";
import { useState } from "react";
import ContentLinks from "../dados/contentLinks";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

export default function Menu() {
    const namePath = usePathname();
    const menuFlutuante = namePath == "/" ? "bg-white" : " bg-white";

    const [menuActive, setMenuActive] = useState("");
    const [menuNavigation, setMenuNavigation] = useState("-right-full");
    const [menuProduct, setMenuProduct] = useState(false);

    const menuBurger = () => {
        const isOpening = menuActive === "";
        const currentActive = isOpening ? "is-active " : "";
        const currentNavigation = isOpening ? "right-0" : "-right-full";

        setMenuActive(currentActive);
        setMenuNavigation(currentNavigation);

        // Travar ou destravar o scroll do body
        if (isOpening) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    };

    return (
        <>
            <Gradiente classColor="bg-gradient-to-r from-trueGray-600 via-orange-400 to-trueGray-600" />
            <header
                className={
                    "relative w-full py-6 z-50 bg-white " +
                    (namePath == "/" ? "absolute " : " md:bg-[center_top_10rem]") +
                    menuFlutuante
                }
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-row justify-between items-center h-auto">
                        <div className="logo z-20">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    width={168}
                                    height={112}
                                    className="block h-[2rem] md:h-[2rem] lg:h-[3rem] xl:h-[4rem] w-auto"
                                    alt="Logo - Cartão FE"
                                />
                            </Link>
                        </div>
                        <nav className="flex items-center gap-x-4 lg:gap-x-10">
                            <ul className="hidden md:flex gap-x-[1.5rem] xl:gap-x-10 2xl:gap-x-[3rem] text-xs lg:text-base xl:text-lg 2xl:text-xl font-medium items-center">
                                <li>
                                    <Link href="/" className="text-trueGray-600 hover:text-orange-400 transition duration-300 ease-in-out">
                                        Início
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/quemsomos" className="text-trueGray-600 hover:text-orange-400 transition duration-300 ease-in-out">
                                        Quem Somos
                                    </Link>
                                </li>
                                <li className="relative">
                                    <div className="flex gap-2 items-center">
                                        <Link href="/servicos" className="text-trueGray-600 hover:text-orange-400 transition duration-300 ease-in-out">
                                            Serviços
                                        </Link>
                                    </div>
                                    {menuProduct && (
                                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                                            <ul className="py-2">
                                                <li>
                                                    <Link
                                                        href="/servicos"
                                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                        onClick={() => setMenuProduct(false)}
                                                    >
                                                        Serviços
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <Link href="/contato" className="text-trueGray-600 hover:text-orange-400 transition duration-300 ease-in-out">
                                        Contato
                                    </Link>
                                </li>
                                <li>
                                    <Link href={ContentLinks.whatsapp} target="_blank">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="bg-orange-400 flex flex-row gap-2 place-items-center rounded-full py-2 px-8 md:px-6 lg:px-8 text-white text-base md:text-sm lg:text-base uppercase font-light transition duration-300 ease-in-out hover:bg-orange-400"
                                        >
                                            chame no whatsapp
                                        </motion.button>
                                    </Link>
                                </li>
                            </ul>
                            <div className="flex items-center gap-x-4 md:hidden">
                                <div className="z-20 block md:hidden" onClick={menuBurger}>
                                    <div className={"hamburger hamburger--squeeze " + menuActive}>
                                        <div className="hamburger-box">
                                            <div className="hamburger-inner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <nav
                className={
                    "block md:hidden z-40 w-full h-screen bg-orange-400 fixed top-3 px-6 pt-28 transition-all duration-300 ease-in-out " +
                    menuNavigation
                }
            >
                <div className="container mx-auto">
                    <motion.ul
                        className="flex flex-col gap-5 xl:gap-10 text-xl font-medium"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                    >
                        {[
                            { href: "/", label: "Início" },
                            { href: "/quemsomos", label: "Quem Somos" },
                            { href: "/servicos", label: "Serviços" },
                            { href: "/contato", label: "Contato" },
                        ].map((item, index) => (
                            <motion.li key={index} variants={fadeInUp}>
                                <Link
                                    onClick={menuBurger}
                                    href={item.href}
                                    className="text-white hover:text-orange-300 transition duration-300 ease-in-out"
                                >
                                    {item.label}
                                </Link>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </nav>
        </>
    );
}
