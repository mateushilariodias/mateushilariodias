"use client";

import BodyForm from "@/components/bodyForn";
import Input from "@/components/input";
import Link from "next/link";
import { useState } from "react";

function Register() {

    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    return (
        <BodyForm>
            <h1 className="font-bold text-2xl">Realizar Cadastro</h1>
            <Input newState={setFullName} nameAndId="fullName" placeholder="Nome completo" type="text"></Input>
            <Input newState={setUserName} nameAndId="userName" placeholder="Nome de usuário" type="text"></Input>
            <Input newState={setEmail} nameAndId="email" placeholder="E-mail" type="email"></Input>
            <Input newState={setPhoneNumber} nameAndId="phoneNumber" placeholder="Celular" type="tel"></Input>
            <Input newState={setPassword} nameAndId="password" placeholder="Senha" type="password"></Input>

            <button className="bg-black bg- hover:bg-gray-950 py-3 font-bold text-white rounded-lg">
                <strong>Cadastrar-se</strong>
            </button>
            <Link href="/login"><span className="text-center underline">Logar</span></Link>
        </BodyForm>
    );
}
export default Register;