"use client";

import styles from './login-form.module.css';

import { useFormStatus, useFormState } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect } from "react";
import userPost from '@/actions/userPost';

function FormButton() {
    const {pending} = useFormStatus();

    return (
        <>
            {pending ? <Button disabled={pending}>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        </>
    );
}

export default function RegisterForm() {
    const [state, action] = useFormState(userPost, {
        ok: false,
        error: '',
        data: null
    });

    useEffect(() => {
        if(state.ok) window.location.href = '/account';
    }, [state.ok]);

    return (
        <form action={action} className={styles.form}>
            <Input 
                label="Usuário" 
                name="username" 
                type="text" 
            />

            <Input 
                label="Email" 
                name="email"
                type="email"
            />

            <Input 
                label="Senha" 
                name="password" 
                type="password" 
            />

            <ErrorMessage error={state.error} />

            <FormButton />
        </form>
    );
}