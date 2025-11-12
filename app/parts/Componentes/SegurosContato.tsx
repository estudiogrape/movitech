import { serviceList } from "../dados/contentSeguro";
import Image from "next/image";
import { UseFormRegister, UseFormWatch } from "react-hook-form";

interface SegurosContatoProps {
    register: UseFormRegister<any>;
    watch: UseFormWatch<any>;
}

export default function SegurosContato({ register, watch }: SegurosContatoProps) {
    const selectedValue = watch("se"); // Agora o estado vem do React Hook Form

    return (
        <section id="segurosContato">
            <div className="container">
                <div className="grid sm:grid-cols-3 grid-cols-4 gap-2 lg:gap-4">
                    {serviceList.map((serviceSingle) => (
                        <div key={serviceSingle.slug}>
                            <label className="cursor-pointer">
                                <input {...register("consorcios")} type="radio" value={serviceSingle.title} className="hidden" />
                                <Image src={serviceSingle.img} alt="" className={`w-full aspect-square object-contain p-1 border border-orange-500 rounded-md ${selectedValue === serviceSingle.title ? "scale-110 ring-4 ring-black" : "" }`} />
                                <div className="text-center text-xs font-semibold mt-2 text-black"> {serviceSingle.title} </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}