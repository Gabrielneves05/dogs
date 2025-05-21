'use client';

import userGet from "@/actions/userGet";
import { useUser } from "@/context/userContext";

export default function Account() {
    const {user} = useUser();

    console.log(user);

    return (
        <main>
            <h1>Conta: {user?.nome}</h1>
        </main>
    );
}