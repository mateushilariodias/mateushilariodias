'use client';

import Link from "next/link";

export default function AboutSection() {
    return (
        <section id="aboutSection" className="w-full relative z-20 bg-gray-50 text-gray-900 pb-12 lg:pb-20">
            <img src="/images/logo_mateushilariodias_background.png" className="absolute z-10 opacity-5 hidden lg:flex items-center justify-center w-full" alt="logo de mateushilariodias" />
            <h2 className="font-bold text-center text-base lg:text-3xl pt-10 lg:pt-20 pb-4 lg:pb-6">
                Um pouco sobre<br />Mateus Hilário Dias
            </h2>
            <div className="flex flex-col gap-4 lg:gap-6 mx-auto xl:max-w-4xl px-4 lg:px-0 text-justify tex-base lg:text-xl pb-4 lg:pb-8">
                <p>
                    Nascido em 15 de setembro de 2004, em Pedregulho, SP, sou um albino apaixonado por séries e novelas. Desde cedo, a igreja evangélica esteve presente em minha vida, influenciando-me a seguir um caminho religioso. No entanto, em 2019, abandonei o curso de pastor para explorar novas experiências.
                </p>
                <p>
                    Durante a pandemia, dediquei-me à atuação e à criação de conteúdo no TikTok, desenvolvendo também uma paixão por escrever poemas e romances. Em 2021, tornei-me embaixador do Prêmio Jovem Brasileiro, ampliando meu contato com a arte e a cultura. Atualmente, estudo Análise e Desenvolvimento de Sistemas na Fatec de Franca, SP, enquanto continuo atuando e criando conteúdo.
                </p>
                <p>
                    Minha história é de autodescoberta, e convido você a conhecer mais sobre essa trajetória.
                </p>
            </div>
            <div className="flex flex-row justify-center items-center">
                <Link href="" className="bg-black py-3 px-10 lg:py-4 lg:px-16 font-bold text-white rounded-xl text-base lg:text-xl text-center">
                    <strong>Acessar autobiografia</strong>
                </Link>
            </div>
        </section>
    );
}