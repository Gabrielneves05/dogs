"use client";

import styles from './login-form.module.css';

import { useFormStatus, useFormState } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import lostAccount from '@/actions/lostAccount';
import { useState, useEffect } from 'react';

function FormButton() {
    const {pending} = useFormStatus();

    return (
        <>
            {pending ? <Button disabled={pending}>Enviando...</Button> : <Button>Enviar Email</Button>}
        </>
    );
}

export default function LostAccountForm() {
    const [state, action] = useFormState(lostAccount, {
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
                label="Email / Usuário" 
                name="login" 
                type="text" 
            />

            <input 
                type="hidden" 
                name='url'
                value={url} 
            />

            <ErrorMessage error={state.error} />

            {state.ok ? <p style={{color: '#4c1'}}>Email enviado</p> : <FormButton />}

        </form>
    );
}