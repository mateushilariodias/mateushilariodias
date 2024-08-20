'use client'

import Link from "next/link";

function Footer() {

    return (
        <footer className="bg-black text-gray-50 flex flex-col justify-center items-center w-full py-4 lg:py-8">
            <section className="flex flex-col lg:flex-row justify-between py-3 lg:py-4 px-4 lg:px-16 xl:px-40 w-full">
                <nav className="lg:flex-col gap-4 text-base lg:text-xl">
                    <h3 className="text-center lg:text-left font-bold text-xl pb-3">Sites</h3>
                    <div className="flex flex-row gap-4 justify-center lg:flex-col lg:gap-0">
                        <Link href=''>
                            <span>Autobiografia</span><br />
                        </Link>
                        <Link href=''>
                            <span>Galeria</span><br />
                        </Link>
                        <Link href=''>
                            <span>Notícias</span><br />
                        </Link>
                        <Link href=''>
                            <span>Reflexões</span>
                        </Link>
                    </div>
                </nav>
                <address className="flex flex-col text-xl pt-5 lg:pt-0">
                    <h3 className="text-center lg:text-left font-bold text-xl pb-3">Contato</h3>
                    <div>
                        <Link href='' className="flex flex-row gap-3 items-center justify-center lg:justify-start">
                            <img src="/images/emailIcon.svg" className="h-8 w-8 lg:h-12 lg:w-12" alt="Icone do E-mail" />
                            <span className="text-base lg:text-xl">mateushilariodias@gmail.com</span><br />
                        </Link>
                    </div>
                    <div>
                        <Link href='' className="flex flex-row gap-3 items-center justify-center lg:justify-start">
                            <img src="/images/whatsAppIcon.svg" className="h-8 w-8 lg:h-12 lg:w-12" alt="Icone do WhatsApp" />
                            <span className="text-base lg:text-xl">(16) 99119-0429</span>
                        </Link>
                    </div>
                </address>
                <div className="lg:flex lg:flex-row gap-6 items-center justify-center pt-5 lg:pt-0">
                    <h3 className="lg:hidden text-center lg:text-left font-bold text-xl pb-3">Mídias socias</h3>
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <Link href=''>
                            <img src="/images/tiktokIcon.svg" className="h-8 w-8 lg:h-14 lg:w-14" alt="icone do TikTok" />
                        </Link>
                        <Link href=''>
                            <img src="/images/instagramIcon.svg" className="h-8 w-8 lg:h-14 lg:w-14" alt="Icone do Instagram" />
                        </Link>
                        <Link href=''>
                            <img src="/images/youtubeIcon.svg" className="h-8 w-8 lg:h-14 lg:w-14" alt="Icone do YouTube" />
                        </Link>
                        <Link href=''>
                            <img src="/images/linkedinIcon.svg" className="h-8 w-8 lg:h-14 lg:w-14" alt="Icone do LinkedIn" />
                        </Link>
                        <Link href=''>
                            <img src="/images/facebookIcon.svg" className="h-8 w-8 lg:h-14 lg:w-14" alt="Icone do Facebook" />
                        </Link>
                    </div>
                </div>
            </section>
            <span className="text-base text-center lg:text-2xl py-4 px-4">&copy; 2024 Mateus Hilário Dias. Todos os direitos reservados.</span>
        </footer>
    )
}
export default Footer;