import AccountPhotoPost from "@/components/account/accountPhotoPost";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Postar | Minha Conta",
};

export default async function Posts() {
    return (
        <AccountPhotoPost />
    );
}