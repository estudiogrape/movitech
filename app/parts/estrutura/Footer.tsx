"use client";

import RedesSociais from "@/app/parts/Componentes/RedesSociais";
import Image from "next/image";
import Logo from "@/public/img/logo.png";
import Link from "next/link";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import ContentLinks from "../dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gradiente from "./gradiente";

export default function Rodape() {
  return (
    <>
      <footer className="bg-trueGray-100 md:py-10 lg:py-16 relative ">
        <div className="container mx-auto px-4  text-trueGray-601 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 lg:gap-6   lg:text-left   text-center  items-center md:items-start  ">
            <div className="grid gap-4">
              <Image
                src={Logo}
                alt=""
                className="w-auto h-auto  mx-auto md:mx-0 my-3 md:my-0 md:mb-3"
              />
            </div>
            <div className=" my-3 md:px-[2rem] lg:px-[3rem] xl:px-[5rem] 2xl:px-[4rem] ">
              <div className="mb-4">
                <h3 className="flex items-center font-semibold justify-center md:justify-start md:items-start md:mb-2 md:text-lg lg:text-xl ">
                  Menu
                </h3>
              </div>
              <ul className="flex flex-col items-center md:items-start  text-xs font-medium 2xl:text-lg ">
                <li className="py-2">
                  <Link href="/" className="text-orange-400 hover:text-black">
                    Início
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#quemsomos"
                    className="text-orange-400 hover:text-black"
                  >
                    Quem Somos
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#servicos"
                    className="text-orange-400 hover:text-black"
                  >
                    Serviços
                  </Link>
                </li>
                <li className="py-2">
                  <Link
                    href="#contato"
                    className="text-orange-400 hover:text-black"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            <div className="my-3 break-words  ">
              <div className="mb-4">
                <h3 className="flex items-center font-semibold justify-center md:justify-start md:items-start md:mb-2 md:text-lg lg:text-xl ">
                  Contato
                </h3>
              </div>
              <ul className="text-orange-400 flex flex-col items-center md:items-start ">
                <li className="text-xs 2xl:text-base py-2 ">
                  <Link
                    href={ContentLinks.email}
                    target="_blank"
                    className="text-orange-400 hover:text-black flex gap-x-3 items-start"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-xl text-orange-400"
                    />
                    <div className="break-all">{ContentLinks.emailShow}</div>
                  </Link>
                </li>

                <li className="text-xs 2xl:text-base py-2">
                  <Link
                    href={ContentLinks.whatsapp}
                    target="_blank"
                    className=" hover:text-black text-orange-400  flex gap-x-3 items-start"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className=" w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-xl text-orange-400"
                    />
                    <div className="break-all">{ContentLinks.whatsappShow}</div>
                  </Link>
                </li>
                <li className="text-xs 2xl:text-base py-2">
                  <Link
                    href={ContentLinks.phone}
                    target="_blank"
                    className=" hover:text-black text-orange-400  flex gap-x-3 items-start"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className=" w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-xl text-orange-400"
                    />
                    <div className="break-all">{ContentLinks.phoneShow}</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" my-3 ">
              <div className="mb-4">
                <h3 className="flex font-semibold items-center justify-center md:justify-start md:items-start md:mb-2 md:text-lg lg:text-xl ">
                  Redes Sociais
                </h3>
              </div>
              <div>
                <RedesSociais
                  classColor="text-orange-400"
                  classHoverColor="hover:text-black"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Gradiente classColor="bg-orange-400" />
    </>
  );
}
