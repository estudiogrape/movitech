"use client";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import "@splidejs/react-splide/css";
import React from "react";
import { serviceList } from "@/app/parts/dados/contentSeguro";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../estrutura/headerTitle";

export default function Seguro() {
    return (
        <div className="bg-black  relative" id="seguro">
            <HeaderTitle title="Serviços" text="text-white" />
            <div className="container mx-auto  relative pb-8 lg:pb-16 " id="servicos">
                <div className="grid grid-col-1 gap-4 lg:gap-8 place-items-center w-full  ">
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-4 px-4 ">
                        {serviceList.map((serviceSingle) => (
                            <div
                                key={serviceSingle.slug}
                                className="h-full text-yellow-300 break-words relative"
                            >
                                <div className="flex justify-center items-center ">
                                    <Image
                                        src={serviceSingle.img}
                                        alt=""
                                        className="w-full h-[8rem] md:h-[10rem] lg:h-[15rem] object-cover rounded-2xl md:rounded-3xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                    <div className=" absolute flex bottom-4 w-fulll ">
                                        <h3 className="flex  text-[0.6rem] md:text-sm lg:text-xl xl:text-2xl font-semibold leading-tight uppercase  text-center  ">
                                            {serviceSingle.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center md:justify-start  my-4">
                        <Link href="/contato">
                            <button
                                type="button"
                                className="flex flex-row gap-2 justify-center rounded-lg  py-2 px-8 md:px-6  lg:px-12  bg-yellow-500  text-black items-center text-xs md:text-base lg:text-xl uppercase font-medium"
                            >
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className=" h-3  w-3 lg:h-6 lg:w-6 mr-2"
                                />
                                <span>tenho interesse!</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
