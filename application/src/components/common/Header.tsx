'use client'

import Link from "next/link";

function Header() {
    return (
        <header className="flex flex-row justify-between items-center">
            <img src="/images/logo_mateushilariodias.png" alt="logo de mateushilariodias" />
            <div className="text-black">
                <strong className="text-xl">Mateus Hilário Dias</strong><br />
                <strong className="text-sm">Por memórias infinitas</strong>
            </div>
            <div className="flex flex-row gap-10 text-xl text-black">
                <Link href=''>
                <span>Autobiografia</span>
                </Link>
                <Link href=''>
                <span>Galeria</span>
                </Link>
                <Link href=''>
                <span>Notícias</span>
                </Link>
                <Link href=''>
                <span>Reflexões</span>
                </Link>
            </div>
        </header>
    )
}
export default Header;