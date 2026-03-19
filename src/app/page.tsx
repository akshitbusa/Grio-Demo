import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

export default function WelcomeScreen() {
  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoContainer}>
          <div className={styles.logoGlow}></div>
          <div className={styles.logoIcon}>
            <Sparkles size={48} className={styles.sparkleIcon} />
          </div>
        </div>

        <div className={styles.textSection}>
          <h1 className={`${styles.title} text-gradient`}>GRIO</h1>
          <h2 className={styles.subtitle}>Your AI Learning Companion</h2>

          <p className={styles.message}>
            Experience the next layer of learning. Let AI guide you step-by-step through your educational journey.
          </p>
        </div>
        <div className={styles.actionContainer}>
          <div>

            <Link href="/home" className={styles.primaryButton}>
              <span>Start Learning</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
