"use client";

import login from "@/actions/login";
import { useFormStatus, useFormState } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";

function FormButton() {
    const {pending} = useFormStatus();

    return (
        <>
            {pending ? <Button disabled={pending}>Entrando...</Button> : <Button>Entrar</Button>}
        </>
    );
}

export default function LoginForm() {
    const [state, action] = useFormState(login, {
        ok: false,
        error: '',
        data: null
    });

    useEffect(() => {
        if(state.ok) window.location.href = '/account';
    }, [state.ok]);

    return (
        <>
            <form action={action}>
                <Input 
                    label="Usuário" 
                    name="username" 
                    type="text" 
                />

                <Input 
                    label="Senha" 
                    name="password" 
                    type="password" 
                />

                <ErrorMessage error={state.error} />

                <FormButton />
            </form>
        </>
    );
}