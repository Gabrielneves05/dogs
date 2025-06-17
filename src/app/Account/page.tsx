import getPhotos from "@/actions/getPhotos";
import userGet from "@/actions/userGet";
import Feed from "@/components/feed/feed";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Minha Conta",
};

export default async function Account() {
    const { data: user } = await userGet();
    const { data } = await getPhotos({user: user?.username});

    return (
        <section>
            {data?.length ? (
                <Feed photos={data} user={user?.username} />
            ) : (
                <div>
                    <p style={{
                        color: "#444", 
                        fontSize: "1.25rem", 
                        "marginBottom": "1rem"
                        }}
                    >
                        Nenhuma foto encontrada.
                    </p>
                    <Link 
                        href={"/account/posts"} 
                        className="button"
                        style={{display: "inline-block"}}
                    >
                        Postar Foto
                    </Link>
                </div>
            )}
        </section>
    );
}