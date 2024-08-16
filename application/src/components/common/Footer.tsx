'use client'

import Link from "next/link";

function Footer() {

    return (
        <footer className="bg-black text-white flex flex-col justify-center items-center w-full">
            <section className="flex flex-row justify-between py-3 lg:py-4 px-4 lg:px-16 xl:px-40 w-full">
                <nav className="flex-col gap-4 text-xl">
                    <h3 className="font-bold pb-3">Sites</h3>
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
                </nav>
                <address className="flex flex-col text-xl gap-4">
                    <h3 className="font-bold pb-3">Contato</h3>
                    <div>
                        <Link href='' className="flex flex-row gap-3 items-center">
                            <img src="/images/emailIcon.svg" className="h-12 w-12" alt="Icone do E-mail" />
                            <span className="text-sm lg:text-xl">mateushilariodias@gmail.com</span><br />
                        </Link>
                    </div>
                    <div>
                        <Link href='' className="flex flex-row gap-3 items-center">
                            <img src="/images/whatsAppIcon.svg" className="h-12 w-12" alt="Icone do WhatsApp" />
                            <span className="text-xs lg:text-xl">(16) 99119-0429</span>
                        </Link>
                    </div>
                </address>
                <div className="flex flex-row gap-6 items-center">
                    <Link href=''>
                        <img src="/images/tiktokIcon.svg" className="h-14 w-14" alt="icone do TikTok" />
                    </Link>
                    <Link href=''>
                        <img src="/images/instagramIcon.svg" className="h-14 w-14" alt="Icone do Instagram" />
                    </Link>
                    <Link href=''>
                        <img src="/images/youtubeIcon.svg" className="h-14 w-14" alt="Icone do YouTube" />
                    </Link>
                    <Link href=''>
                        <img src="/images/linkedinIcon.svg" className="h-14 w-14" alt="Icone do LinkedIn" />
                    </Link>
                    <Link href=''>
                        <img src="/images/facebookIcon.svg" className="h-14 w-14" alt="Icone do Facebook" />
                    </Link>
                </div>
            </section>
            <span className="text-2xl">&copy; 2024 Mateus Hilário Dias. Todos os direitos reservados.</span>
        </footer>
    )
}
export default Footer;