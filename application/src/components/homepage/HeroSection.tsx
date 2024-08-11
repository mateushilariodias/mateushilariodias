import Link from "next/link";
import { GoArrowDown } from "react-icons/go";

function HeroSection() {
    return (
        <section className="pt-8 pb-10 px-4 lg:pt-20 lg:pb-8 lg:px-16 xl:px-40 bg-black text-white">
            <article className="lg:flex lg:flex-row">
                <div>
                    <h1 className="font-bold text-xl lg:text-3xl pb-2 lg:pb-12">Mateus Hilário Dias:<br />Vida pessoal e profissional</h1>
                    <p className="text-base lg:text-2xl pb-4 lg:pr-52 lg:pb-12">Mateus nasceu em 15 de setembro de 2004, em Pedregulho, SP. Um bebê albino com uma paixão desde cedo por arte. Inicialmente seguindo uma vocação religiosa, ele mais tarde descobriu se descobriu homossexual. Optou por deixar a vida eclesiástica para trás e explorar sua liberdade, iniciando uma carreira artística e na área de tecnologia da informação. Uma jornada marcada por autenticidade e coragem.</p>
                    <Link href="" className="hidden lg:inline-flex bg-white hover:bg-slate-100 py-4 px-24 font-bold text-black rounded-xl text-xl text-center">
                        <strong>Acessar galeria</strong>
                    </Link>
                </div>
                <div className="lg:hidden w-auto flex justify-center items-center pb-6 lg:pb-0">
                    <img className="w-auto" src="images/hero.png" alt="Fotografia de Mateus contemplando uma paisagem." />
                </div>
                <Link href="" className="lg:hidden inline-flex bg-white hover:bg-slate-100 py-3 px-10 font-bold text-black rounded-xl text-base text-center">
                    <strong>Acessar galeria</strong>
                </Link>
                <div className="hidden w-full lg:flex justify-center items-center mt-10 lg:mt-0">
                    <img className="w-full" src="images/hero.png" alt="Fotografia de Mateus contemplando uma paisagem." />
                </div>
                <Link href="#aboutSection">
                    <GoArrowDown className="lg:hidden mt-8 mx-auto h-10 w-10 animate-bounce" />
                </Link>
            </article>
            <Link href="#aboutSection">
                <GoArrowDown className="hidden lg:flex animate-bounce mt-8 lg:mt-4 mx-auto h-10 w-10" />
            </Link>
        </section>
    )
}
export default HeroSection;