import Image from "next/image";
import Pontos from "@/public/img/pontos-orange.png";
import Chevron from "@/public/img/chevron.png";

interface PropsHeaderTitle {
  title: string;
  text: string;
  backgroundClass?: string | null;
}

export default function HeaderTitle(props: PropsHeaderTitle) {
  const classBg = props.backgroundClass ? props.backgroundClass : "";
  const classText = props.text ? props.text : "";

  return (
    <div
      className={` ${classBg} bg-cover h-18 md:h-42 xl:h-42 flex items-center justify-center p-4 md:p-6 lg:p-10 `}
    >
      <div className="container mx-auto text-center">
        <div className={` ${classText} uppercase font-bold`}>
          <div className="flex justify-between items-center gap-4 xl:px-4">
            <div className="flex gap-4 items-center">
              <Image
                src={Chevron}
                alt=""
                className="
                  max-w-[40px] sm:max-w-[50px] md:max-w-[60px]
                  lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px]
                  w-auto h-auto object-contain
                "
              />
              <div className="text-xs md:text-2xl lg:text-4xl whitespace-nowrap">
                {props.title}
              </div>
            </div>
            <Image
              src={Pontos}
              alt=""
              className="
                max-w-[40px] sm:max-w-[50px] md:max-w-[60px]
                lg:max-w-[70px] xl:max-w-[80px] 2xl:max-w-[90px]
                w-auto h-auto object-contain
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
