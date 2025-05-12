"use client";

import styles from './login-form.module.css';

import { useFormStatus, useFormState } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useState, useEffect } from 'react';
import resetPassword from '@/actions/resetPassword';

function FormButton() {
    const {pending} = useFormStatus();

    return (
        <>
            {pending ? <Button disabled={pending}>Alterando...</Button> : <Button>Alterar Senha</Button>}
        </>
    );
}

export default function ResetPasswordForm({ keyToken, login }: { keyToken: string, login: string }) {
    const [state, action] = useFormState(resetPassword, {
        ok: false,
        error: '',
        data: null
    });

    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl(window.location.href.replace('lostAccount', 'resetPassword'))
    }, []);

    return (
        <form action={action} className={styles.form}>
            <Input 
                label="Nova Senha" 
                name="password"
                type="password"
            />

            <input type="hidden" name="login" value={login} />
            <input type="hidden" name="key" value={keyToken} />

            <ErrorMessage error={state.error} />

            <FormButton />

        </form>
    );
}