import Link from "next/link";
import { ChevronLeft, MessageCircle, Play, CheckCircle } from "lucide-react";
import styles from "./page.module.css";

export default function LessonScreen() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.lessonHeader}>
        <Link href="/home" className={styles.backButton}>
          <ChevronLeft size={24} />
          <span>Back</span>
        </Link>
        <div className={styles.lessonMeta}>Module 2 • Lesson 1</div>
      </header>

      <main className={styles.mainContent}>
        <h1 className={styles.lessonTitle}>
          Welcoming Domestic and International Visitors
        </h1>

        <div className={styles.mediaPlaceholder}>
          <div className={styles.playButtonWrapper}>
            <Play fill="white" size={32} />
          </div>
          <p className={styles.mediaText}>Video Placeholder (3:45)</p>
        </div>

        <div className={styles.summaryBox}>
          <h2 className={styles.sectionHeading}>Lesson Summary</h2>
          <p className={styles.paragraph}>
            In tourism, visitors may be domestic or international. Domestic tourists travel within their own country. International tourists travel from one country to another.
          </p>
          <p className={styles.paragraph}>
            Tourism workers should welcome visitors professionally, communicate clearly, recommend appropriate attractions, and provide useful travel information.
          </p>
        </div>

        <div className={styles.highlightsBox}>
          <h2 className={styles.sectionHeading}>Learning Highlights</h2>
          <ul className={styles.highlightsList}>
            <li>
              <CheckCircle size={20} className={styles.listIcon} />
              <span>Domestic tourists travel within South Africa.</span>
            </li>
            <li>
              <CheckCircle size={20} className={styles.listIcon} />
              <span>International tourists come from other countries.</span>
            </li>
            <li>
              <CheckCircle size={20} className={styles.listIcon} />
              <span>Tourism workers should greet visitors professionally.</span>
            </li>
            <li>
              <CheckCircle size={20} className={styles.listIcon} />
              <span>Staff should know local attractions and transport options.</span>
            </li>
          </ul>
        </div>

      </main>

      <footer className={styles.bottomActions}>
        <Link href="/grio" className={styles.askGrioButton}>
          <div className={styles.grioIconWrapper}>
            <MessageCircle size={20} />
          </div>
          <span>Ask GRIO about this lesson</span>
        </Link>
        <Link href="/activity" className={styles.primaryButton}>
          <span>Practice Activity</span>
        </Link>
      </footer>
    </div>
  );
}
