'use client';

import Link from "next/link";

export default function GalleryPresentationSection() {
    return (
        <section id="aboutSection" className="w-full bg-black text-gray-50 pb-12 lg:pb-20">
            <h2 className="font-bold text-center text-base lg:text-3xl pt-10 lg:pt-20 pb-4 lg:pb-6">
                Mergulhe na arte<br />na galeria.
            </h2>
            <div className="flex flex-col gap-4 lg:gap-6 mx-auto xl:max-w-4xl px-4 lg:px-0 text-justify tex-base lg:text-xl pb-4 lg:pb-8">
                <p>
                    Nesta galeria, você encontrará histórias literárias, incluindo romances e poesias líricas, repletas de sentimentos vividos ou imaginados por Mateus. Com muita arte e criatividade, estas obras foram criadas para fazer o público imergir em cultura.
                </p>
                <p>
                    Se deseja explorar essas histórias, acesse a nossa galeria.
                </p>
            </div>
            <div className="flex flex-row justify-center items-center">
                <Link href="" className="bg-gray-50 py-3 px-10 lg:py-4 lg:px-16 font-bold text-black rounded-xl text-base lg:text-xl text-center">
                    <strong>Acessar galeria</strong>
                </Link>
            </div>
        </section>
    );
}