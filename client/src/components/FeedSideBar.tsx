import Link from "next/link";

function SideBar() {
    return (
        <aside className="pl-10">
            <nav className="flex flex-col gap-4 justify-center font-semibold text-xl underline text-gray-800 bg-zinc-100">
                <Link href=''>Projetos</Link>
                <Link href=''>Noticias</Link>
                <Link href=''>Agenda</Link>
            </nav>
        </aside>
    )
}
export default SideBar;