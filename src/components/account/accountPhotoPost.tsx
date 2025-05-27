"use client";

import styles from './accountPhotoPost.module.css';

import { useFormStatus, useFormState } from "react-dom";
import Button from "../forms/button";
import Input from "../forms/input";
import ErrorMessage from "../helper/error-message";
import { useEffect, useState } from "react";
import userPost from '@/actions/userPost';

function FormButton() {
    const {pending} = useFormStatus();

    return (
        <>
            {pending ? <Button disabled={pending}>Enviando...</Button> : <Button>Enviar</Button>}
        </>
    );
}

export default function AccountPhotoPost() {
    const [state, action] = useFormState(userPost, {
        ok: false,
        error: '',
        data: null
    });

    const [img, setImg] = useState('');

    function handleImageChange({target}: React.ChangeEvent<HTMLInputElement>) {
        if(target.files) {
            setImg(URL.createObjectURL(target.files[0]));
        }

        console.log(target.files);
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <form action={action}>
                <Input 
                    label="Nome" 
                    name="nome" 
                    type="text" 
                />

                <Input 
                    label="Peso"
                    name="peso"
                    type="number"
                />

                <Input 
                    label="Idade"
                    name="idade"
                    type="number"
                />

                <input onChange={handleImageChange} type="file" name="img" id="img" className={styles.file} />

                <ErrorMessage error={state.error} />

                <FormButton />
            </form>

            <div>
                <div 
                    className={styles.preview} 
                    style={{backgroundImage: `url(${img})`}}
                >

                </div>
            </div>
        </section>
    );
}