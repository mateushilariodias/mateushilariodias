import Link from "next/link";
import { FaSearch } from "react-icons/fa"
import { FiAlignJustify } from "react-icons/fi";

function Header() {

    return (
        <header className="w-full bg-white flex justify-between items-center py-2 lg:py-5 lg:px-72 shadow-sm">
            <div className="flex gap-3 lg:gap-6 items-center">
                <img className="pl-2 lg:pl-0" src="images/logo.png" alt="Logo" />
                <Link className="flex flex-col font-bold text-black" href='/'>
                    <span className="text-sm lg:text-xl">Mateus Hilário Dias</span>
                    <span className="text-xs lg:text-sm">Por memórias infinitas</span>
                </Link>
            </div>
            <div className="hidden lg:flex bg-zinc-100 items-center text-gray-600 py-3 px-6 rounded-full">
                <input className="bg-zinc-100 focus-visible:outline-none" type="text" name="search" id="search" placeholder="Pesquisar" />
                <FaSearch />
            </div>
            <div className="hidden lg:flex lg:gap-6">
                {/* <button className="bg-black bg- hover:bg-gray-950 py-3 px-6 font-bold text-white rounded-lg">
                    <strong>Realizar Cadastro</strong>
                </button>        */}
                <button className="bg-black bg- hover:bg-gray-950 py-3 px-6 font-bold text-white rounded-lg">
                    <strong>Realizar Login</strong>
                </button>
            </div>
            <div className="flex lg:hidden pr-2">
                <FiAlignJustify/>
            </div>
        </header>
    )
}
export default Header;