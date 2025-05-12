"use server";

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import login from "./login";

export default async function userPost(state: {},formData: FormData) {
    const username = formData.get("username") as string | null;
    const email = formData.get("email") as string | null;
    const password = formData.get("password") as string | null;

    try {
        if(!username || !email || !password) {
            throw new Error("Preencha os dados");
        }

        if(password.length < 6) {
            throw new Error("A senha deve ter no mínimo 6 caracteres");
        }

        const { url } = USER_POST();

        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if(!response.ok) {
            throw new Error("Email ou usuário inválidos");
        }

        const {ok} = await login({ ok: true, error: '' }, formData)

        if(!ok) {
            throw new Error("Falha ao criar a conta");
        }

        return {
            ok: true,
            data: null,
            error: ''
        }
    } catch (error: unknown) {
        return apiError(error);
    }
}