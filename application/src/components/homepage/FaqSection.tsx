'use client'

import { DataFaqSection } from "@/data/homepage/FaqSection";
import FaqRender from "./FaqRender";

export default function FaqSection() {
    return (
        <section className="w-full bg-black text-gray-50 pb-12">
            <div className="w-full lg:max-w-4xl lg:mx-auto px-3 lg:px-0">
                <h2 className="font-bold text-center text-base lg:text-3xl pt-10 lg:pt-20 pb-4 lg:pb-6">
                    FAQ
                </h2>
                <div className="flex flex-col gap-4 lg:gap-6 mx-auto xl:max-w-4xl px-4 lg:px-0 text-justify tex-base lg:text-xl pb-4">
                    <p>
                        Procuramos responder às principais dúvidas aqui, mas se você tiver alguma que não está listada, fique à vontade para nos perguntar em nossas mídias sociais. Teremos o prazer de responder.
                    </p>
                </div>
            </div>
            <article className="pb-5 px-4 lg:px-4">
                <FaqRender data={DataFaqSection} />
            </article>
        </section>
    );
}