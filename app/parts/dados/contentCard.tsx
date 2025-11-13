
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck";

export const serviceList = [
  {
    title: "Equipamentos modernos e revisados",
    slug: "Equipamentos",
    text: "Equipamentos atualizados e revisados para garantir segurança, desempenho e eficiência.",
    icon: (
      <FontAwesomeIcon
        icon={faCircleCheck}
        className="text-orange-400 w-4 h-4 md:h-8 md:w-8 lg:h-10 lg:w-10  xl:h-12 xl:w-12"
      />
    ),
  },
  {
    title: "Certificações e Normas técnicas",
    slug: "Certificações",
    text: "Certificações que asseguram qualidade, segurança e conformidade em cada serviço.",
    icon: (
      <FontAwesomeIcon
        icon={faAward}
        className="text-orange-400 w-4 h-4 md:h-8 md:w-8 lg:h-10 lg:w-10  xl:h-12 xl:w-12"
      />
    ),
  },
  {
    title: "Soluções em Projetos com Flexibilidade",
    slug: "Soluções",
    text: "Projetos personalizados com tecnologia e eficiência para cada necessidade.",
    icon: (
       <FontAwesomeIcon
        icon={faTruck}
        className="text-orange-400 w-4 h-4 md:h-8 md:w-8 lg:h-10 lg:w-10  xl:h-12 xl:w-12"
      />
    ),
  },
  {
    title: "Atendimento ágil e personalizado",
    slug: "Atendimento",
    text: "Atendemos diversos setores industriais e de infraestrutura com excelência.",
    icon: (
       <FontAwesomeIcon
        icon={faClockRotateLeft}
        className="text-orange-400 w-4 h-4 md:h-8 md:w-8 lg:h-10 lg:w-10  xl:h-12 xl:w-12"
      />
    ),
  },
  
];
