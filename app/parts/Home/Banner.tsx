"use client";
import Link from "next/link";
import ContentLinks from "../dados/contentLinks";

export default function Banner() {
    return (
        <div className="bg-slide1 bg-cover bg-center bg-no-repeat w-full md:h-[31rem] lg:h-[27rem] xl:h-[34rem] 2xl:h-[30rem] ">
            <div className="container mx-auto px-4 relative overflow-hidden">
                <div className="w-full items-center grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 justify-center pt-28 md:pt-32 -mb-0 md:-mb-[2rem] overflow-hidden">
                    <div className="-mt-[2rem] flex flex-col gap-4 lg:gap-8 items-center md:items-start text-center md:text-left w-full py-8">
                        <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl text-white font-bold !leading-snug">
                            {" "}
                            O cuidado que seu carro merece.
                            A confiança que você procura.
                        </h2>
                        <h2 className="text-base lg:text-lg xl:text-xl text-white font-light !leading-tight">
                            Somos especialistas em manutenção preventiva,
                            diagnóstico reparos e mecânica especializada. Transparência e qualidade em cada
                            serviço.
                        </h2>
                        <div className="flex gap-2 mt-2">
                            <Link href={ContentLinks.whatsapp}>
                                <button className="flex flex-row gap-2  rounded-lg  py-2 px-8 md:px-6  lg:px-12  bg-yellow-500 text-black text-xs md:text-base lg:text-lg xl:text-xl uppercase font-bold items-center">
                                   
                                    QUERO SABER MAIS
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
