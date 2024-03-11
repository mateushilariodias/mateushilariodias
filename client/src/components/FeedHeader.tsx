import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa"

interface IUser{
    userName:string;
    userImg:string;
}

function Header() {

    const [user, setUser] = useState<IUser | undefined>(undefined);
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()

    useEffect(() => {
        let value = localStorage.getItem("nos-social: user")
        if (value) {
            setUser(JSON.parse(value));
        }
    }, [])

    const logout = (e:any) => {
        e.preventDefault();
        localStorage.removeItem("nos-social:token");
        router.push("/loginUser");
    }

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
            <div className="flex gap-5 items-center text-gray-600">
                <div className="relative" onMouseLeave={()=>setShowMenu(false)}>
                    <button className="flex gap-2 items-center" onClick={() => setShowMenu(!showMenu)}>
                        <img className="w-10 h-10 rounded-full" src={user?.userImg ? user.userImg : "https://img.freepik.com/free-icon/user_318-159711.jpg"} alt="Imagem do perfil" />
                        <span className="font-bold">{user?.userName}</span>
                    </button>
                    {showMenu && (
                        <div className="absolute flex flex-col bg-white p-4 shadow-md rounded-md gap-2 border-t whitespace-nowrap right-[-8px]">
                            <Link className="border-b" href="">Editar perfil</Link>
                            <Link href="" onClick={(e)=>logout(e)}>Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
export default Header;