"use client";

import BodyForm from "@/components/bodyForn";
import Input from "@/components/input";
import { useState } from "react";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <BodyForm>
            <h1 className="font-bold text-2xl">Realizar Login</h1>
            <Input newState={setEmail} nameAndId="email" placeholder="E-mail" type="email"></Input>
            <Input newState={setPassword} nameAndId="password" placeholder="Senha" type="password"></Input>

            <button className="bg-black bg- hover:bg-gray-950 py-3 font-bold text-white rounded-lg">
                <strong>Logar</strong>
            </button>
            <span className="text-center">Ou</span>
            <button className="bg-black bg- hover:bg-gray-950 py-3 font-bold text-white rounded-lg">
                <strong>Realizar Cadastro</strong>
            </button>
        </BodyForm>
    );
}
export default Register;