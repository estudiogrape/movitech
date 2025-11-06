import Banner from "@/app/parts/Home/Banner";
import Sobre from "@/app/parts/Home/QuemSomos";
import Servicos from "@/app/parts/Home/Servicos";
import Contato from "@/app/parts/Home/Contato";

export default function Home() {
    return (
        <div>
            <Banner />
            <Sobre />
            <Servicos />
            <Contato />
        </div>
    );
}
