import RegisterForm from "@/components/login/login-create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crie sua conta",
    description: "Crie sua conta para acessar o site",
};

export default async function Register() {
    return (
        <div className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <RegisterForm />
        </div>
    );
}