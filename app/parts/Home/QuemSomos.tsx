import Image from "next/image";
import ImgSobre from "@/public/img/img-sobre.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function QuemSomos() {
    return (
        <div className="bg-white  py-[2rem] md:py-[4rem]  relative ">
            <div className="container mx-auto px-4 " id="quemsomos">
                <div className="md:flex md:flex-row-reverse gap-2 md:gap-0 justify-center p-2 md:p-0 ">
                    <div className="w-full md:w-1/2 flex items-center justify-center h-full relative">
                        <Image src={ImgSobre} alt="" className="relative w-full md:w-2/3 mx-auto aspect-square justify-center" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="text-black pb-6 lg:pb-8  xl:py-10 text-md md:text-3xl lg:text-4xl  font-semibold text-center md:text-start">MOVITECH</div>
                        <div className="text-sm md:text-base lg:text-lg xl:text-xl    text-black font-light flex flex-col space-y-6 lg:space-y-10 xl:space-y-12">
                            <p className=""> 
                                Manutenção completa para o seu carro. Somos especialistas
                                em revisão, freios, troca de óleo, motor e suspensão. Traga seu
                                veículo para um diagnóstico preciso e dirija com segurança.    
                            </p>
                            <p className="">
                                Paixão por carros, compromisso com você. A confiança que
                                seu veículo precisa.
                            </p>
                        <div className=" mt-[20rem] flex items-center justify-center md:justify-start ">
                            <Link href="/contato">
                                <button type="button" className="flex flex-row gap-2 justify-center rounded-lg  py-2 px-8 md:px-6 lg:py-2 xl:py-2 lg:px-12  bg-yellow-500  text-black items-center text-xs md:text-base lg:text-xl uppercase font-medium">
                                    <FontAwesomeIcon icon={faPhone} className=" h-4  w-4 lg:h-6 lg:w-6 mr-2" />
                                    <span>TENHO INTERESSE!</span>
                                </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
