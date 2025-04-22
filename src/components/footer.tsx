import styles from "./footer.module.css";

import Image from "next/image";

export default async function Footer() {
    return (
        <footer className={styles.footer}>
            <Image 
                src={"/Assets/dogs-footer.svg"}
                alt="Dogs"
                width={28}  
                height={22}
            />
            <p>© 2024 Dogs. Todos os direitos reservados.</p>
        </footer>
    );
}