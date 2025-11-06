"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/img/logo.png";
import Image from "next/image";
import Gradiente from "./gradiente";
import ContentLinks from "../dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Menu() {
  const namePath = usePathname();

  const [menuActive, setMenuActive] = useState("");
  const [menuNavigation, setMenuNavigation] = useState("-right-full");

  const menuBurger = () => {
    const currentActive = menuActive == "" ? "is-active" : "";
    const currentNavigation = menuActive == "" ? "right-0" : "-right-full";
    setMenuActive(currentActive);
    setMenuNavigation(currentNavigation);
  };

  return (
    <>
      <Gradiente />
      <header
        className={
          "w-full py-6 md:py-10 z-50 " +
          (namePath == "/" ? " absolute " : "bg-white bg-[center_top_43rem]")
        }
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-row justify-between items-center h-auto">
            <div className="logo z-20 ">
              <Link href="/">
                <Image
                  src={Logo}
                  width={168}
                  height={112}
                  className="block h-[2rem]  md:bottom-2 md:h-[2rem] lg:h-[3rem] xl:h-[4rem] lg:-bottom-0 xl:-bottom-0  2xl:-bottom-2 w-auto "
                  alt="Logo - Movitech"
                />
              </Link>
            </div>
            <nav className=" flex items-center gap-x-4 lg:gap-x-10  ">
              <ul className="hidden md:flex gap-x-[2rem]  lg:gap-x-[2.5rem] xl:gap-x-10 2xl:gap-x-[3rem] text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium items-center">
                <li>
                  <Link href="/" className="text-white hover:text-yellow-500">
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="#quemsomos"
                    className="text-white hover:text-yellow-500"
                  >
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicos"
                    className="text-white hover:text-yellow-500"
                  >
                    Serviços
                  </Link>
                </li>

                <li>
                  <Link href={ContentLinks.whatsapp} target="_blank">
                    <button className="bg-yellow-500 flex flex-row gap-2  place-items-center rounded-md  py-2 px-8 md:px-6 lg:py-2 lg:px-12   text-white text-base md:text-sm lg:text-lg uppercase font-semibold">
                      <FontAwesomeIcon
                        icon={faHeadphones}
                        className="  md:h-6 md:w-6"
                      />
                     ENTRE EM CONTATO
                    </button>
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-x-4 md:hidden">
                <div className="z-20 block md:hidden " onClick={menuBurger}>
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
          "block md:hidden z-40 w-full h-screen bg-yellow-500  fixed top-2 px-6 pt-28 transition-all duration-300 ease-in-out " +
          menuNavigation
        }
      >
        <div className="container mx-auto">
          <ul className="flex flex-col gap-5 xl:gap-10 text-xl font-medium">
            <li>
              <Link onClick={menuBurger} href="/" className="text-white">
                Início
              </Link>
            </li>
            <li>
              <Link
                onClick={menuBurger}
                href="#quemsomos"
                className="text-white"
              >
                Quem Somos
              </Link>
            </li>

            <li>
              <Link
                onClick={menuBurger}
                href="#servicos"
                className="text-white"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link onClick={menuBurger} href="#contato" className="text-white">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
