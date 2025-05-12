import LoginForm from "@/components/login/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Acesse sua conta",
    description: "Acesse sua conta",
};

export default async function Login() {
    return (
        <section className="animeLeft">
            <h1 className="title">Acesse sua conta</h1>
            <LoginForm />
        </section>
    );
}