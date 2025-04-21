import Image from "next/image";
import styles from "./Header.module.css";

import Link from "next/link";

export default async function Header() {
    const user = false;

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link className={styles.logo} href={"/"}>
                    <Image 
                        src={"/Assets/dogs.svg"} 
                        width={28} 
                        height={22} 
                        alt="Dogs" 
                    />
                </Link>
                {user ? (
                    <Link className={styles.login} href={"/Account"}>
                        Dogs
                    </Link>
                ) : (
                    <Link className={styles.login} href={"/Login"}>Entrar / Criar</Link>
                )}

            </nav>
        </header>
    );
}