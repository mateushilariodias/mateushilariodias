'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <header className="flex flex-row justify-between items-center w-full py-3 lg:py-4 px-4 lg:px-16 xl:px-40">
            <div className="flex flex-row justify-center items-center gap-6">
                <img src="/images/logo_mateushilariodias.png" className="h-9 w-10 lg:h-auto lg:w-auto" alt="logo de mateushilariodias" />
                <div className="text-black">
                    <strong className="text-sm lg:text-xl">Mateus Hilário Dias</strong><br />
                    <strong className="text-xs lg:text-sm">Por memórias infinitas</strong>
                </div>
            </div>
            <nav className="hidden lg:flex lg:flex-row gap-12 text-xl text-black">
                <FaSearch className="h-6 w-6" />
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
            </nav>
            <div className="flex flex-row gap-4 lg:hidden text-black">
                <FaSearch onClick={() => setShowSearch(true)} className="h-5 w-5" />
                <FaBars onClick={() => setShowMobileMenu(true)} className="h-5 w-5 cursor-pointer" />
            </div>
            {/* {showSearch && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-start text-gray-600">
                    <div className="flex justify-end p-4">
                        <FaTimes onClick={() => setShowMobileMenu(false)} className="cursor-pointer h-8 w-8 text-black" />
                    </div>
                    <div className="hidden md:flex bg-zinc-100 items-center text-gray-600 py-1 px-3 rounded-full relative">
                        <input className="bg-zinc-100 focus-visible:outline-none py-2 px-4" type="text" name="search" id="search" placeholder="Pesquisar"/>
                        <FaSearch />
                    </div>
                    <Link href='' className="font-semibold border-t border-zinc-300 text-center pt-2">
                        Ver todos os resultados.</Link>
                </div>
            )} */}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-start text-gray-600">
                    <div className="bg-white p-4 w-full max-w-sm mx-auto">
                        <div className="flex justify-end">
                            <FaTimes onClick={() => setShowMobileMenu(false)} className="cursor-pointer h-8 w-8 text-black" />
                        </div>
                        <nav className="flex flex-col gap-8 text-xl text-black text-center">
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
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}
export default Header;