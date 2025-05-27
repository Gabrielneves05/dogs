"use client";

import styles from './login-form.module.css';

import login from "@/actions/login";
import { useFormStatus, useFormState } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";
import Link from "next/link";
import { useUser } from '@/context/userContext';

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

    const {user} = useUser();

    return (
        <>
            <form action={action} className={styles.form}>
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

            <Link className={styles.lostAccount} href="/login/lostAccount">Esqueceu sua senha?</Link>

            <div className={styles.register}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui uma conta? Cadastre-se no site!</p>
                <Link className="button" href="/login/register">Crie uma conta</Link>
            </div>
        </>
    );
}