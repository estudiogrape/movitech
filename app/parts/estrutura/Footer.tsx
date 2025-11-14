import RedesSociais from "@/app/parts/Componentes/RedesSociais";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/img/logo.png";
import ContentLinks from "@/app/parts/dados/contentLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function Rodape() {
  return (
    <footer className="bg-black py-10 relative ">
      <div className="container mx-auto px-4  text-white ">
        <div className="grid grid-cols-1  lg:gap-y-4  place-items-center">
          <div className="flex flex-col md:col-span-1  gap-y-6 md:gap-y-10 justify-center items-center lg:justify-start lg:items-start">
            <Image src={logoImg} alt="" className="w-40 " />
          </div>

          <div className="my-3">
            <p className=" text-center text-xs font-semibold ">
              Copyright © 2025{" "}
              
                - Movitech <br /> Todos os direitos reservados.
              
            </p>
          </div>
          <div className="my-3 col-span-1">
            <div>
              <RedesSociais
                classColor="text-yellow-500 "
                classHoverColor="hover:text-white"
              />
            </div>
          </div>

          <div className="my-3 col-span-1">
            <Link href={ContentLinks.whatsapp}>
              <button className="bg-yellow-500 flex flex-row gap-2  place-items-center rounded-md  py-2 px-8 md:py-2 md:px-12 text-white text-sm md:text-base lg:text-lg  uppercase font-light">
                <FontAwesomeIcon
                  icon={faHeadphones}
                  className="  md:h-6 md:w-6"
                />{" "}
                ENTRE EM CONTATO
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
