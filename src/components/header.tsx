import Image from "next/image";
import styles from "./header.module.css";

import Link from "next/link";
import userGet from "@/actions/userGet";

export default async function Header() {
    const { data } = await userGet();

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} href={"/"}>
                    <Image 
                        src={"/assets/dogs.svg"} 
                        width={28} 
                        height={22} 
                        alt="Dogs" 
                    />
                </Link>
                {data ? (
                    <Link className={styles.login} href={"/account"}>
                        {data.username}
                    </Link>
                ) : (
                    <Link className={styles.login} href={"/login"}>Entrar / Criar</Link>
                )}

            </nav>
        </header>
    );
}