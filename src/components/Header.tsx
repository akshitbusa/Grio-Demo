import Link from "next/link";
import { Sparkles, UserCircle } from "lucide-react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <div className={styles.iconWrapper}>
          <Sparkles size={20} className={styles.sparkles} />
        </div>
        <span className={styles.brandName}>GRIO</span>
      </div>

      <div className={styles.actions}>
        <Link href="/dashboard" className={styles.iconButton}>
          <UserCircle size={24} />
        </Link>
        {/* <button className={styles.iconButton}>
          <Menu size={24} />
        </button> */}
      </div>
    </header>
  );
}
