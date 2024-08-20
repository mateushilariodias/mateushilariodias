'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

function Agenda() {
    return (
        <header className="flex flex-row justify-between items-center w-full py-3 lg:py-4 px-4 lg:px-16 xl:px-40">
            <div className="flex flex-row justify-center items-center gap-6">
                <span>Agenda</span>
            </div>
            <div>
                <span>Lançamento de um Álbum de poesias
                    Poesias De Um Ser/Estar</span>
                <span>DD/MM/AAAA</span>
            </div>
            <div>
                <span>Lançamento de um Romance
                    Tudo Por Mim</span>
                <span>DD/MM/AAAA</span>
            </div>
        </header>
    )
}
export default Agenda;