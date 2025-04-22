import Image from "next/image";
import styles from "./header.module.css";

import Link from "next/link";

export default async function Header() {
    const user = false;

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
                {user ? (
                    <Link className={styles.login} href={"/account"}>
                        Dogs
                    </Link>
                ) : (
                    <Link className={styles.login} href={"/login"}>Entrar / Criar</Link>
                )}

            </nav>
        </header>
    );
}