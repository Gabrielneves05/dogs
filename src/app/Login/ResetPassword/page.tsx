import ResetPasswordForm from "@/components/login/login-reset-form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trocar senha",
    description: "Troque sua senha e acesse o site",
};

type SearchParamsReset = {
    searchParams: {
        key: string;
        login: string;
    }
}

export default async function ResetPassword({ searchParams }: SearchParamsReset) {
    console.log(searchParams);

    return (
        <div className="animeLeft">
            <h1 className="title">Altere sua senha</h1>
            <ResetPasswordForm 
                keyToken={searchParams.key} 
                login={searchParams.login} 
            />
        </div>
    );
}