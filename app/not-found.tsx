
import HeaderTitle from './parts/estrutura/headerTitle';

export default function NotFound() {
    return (
        <div>
            <main>
                <HeaderTitle title="Não Encontrado" text=""/>
                <div className="flex flex-col items-center justify-between pt-10 pb-20">
                    <div className="flex flex-col">
                        <span className="text-lg md:text-xl text-center font-bold my-10 text-trueGray-500 uppercase font-barlow">Renquip - Logística Integrada</span>
                        <div className="flex flex-col items-center">
                            <div className="text-orange-400 font-bold text-2xl md:text-5xl">
                                Página Não encontrada
                            </div>
                            <div className="text-sm md:text-lg lg:text-xl  xl:text-2xl  mt-5">
                                Esta página não foi encontrada
                            </div>
                            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                                Tente procurar a página pelo menu de navegação.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}