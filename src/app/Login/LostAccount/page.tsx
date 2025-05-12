import LostAccountForm from "@/components/login/login-lost-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Perdeu a conta",
    description: "Recupere sua conta se perdeu a senha",
};

// export const dynamic = "force-dynamic";

export default async function LostAccount() {
    return (
        <div className="animeLeft">
            <h1 className="title">Perdeu a senha?</h1>
            <LostAccountForm />
        </div>
    );
}