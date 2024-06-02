import Link from "next/link";

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
            <div className="flex flex-row gap-6 justify-between items-center">
                <Link href=''>
                    <span>Obras disponíveis</span>
                </Link>
                <Link href=''>
                    <span>Futuros lançamentos</span>
                </Link>
            </div>
        </header>
    )
}
export default Header;