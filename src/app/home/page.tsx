import Link from "next/link";
import { PlayCircle, MessageSquarePlus, Lightbulb, CheckCircle2, Circle } from "lucide-react";
import Header from "../../components/Header";
import styles from "./page.module.css";

export default function CourseHome() {
  const modules = [
    {
      id: 1,
      title: "Introduction to Tourism in South Africa",
      status: "completed",
    },
    {
      id: 2,
      title: "Customer Service for Visitors",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Planning a Visitor Experience",
      status: "locked",
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <Header />
      
      <main className={styles.mainContent}>
        {/* Welcome Block */}
        <section className={`${styles.welcomeSection} animate-fade-in`}>
          <h1 className={styles.greeting}>Hello, Nomsa 👋</h1>
          <p className={styles.courseTitle}>Travel & Tourism Essentials</p>
          <p className={styles.courseDesc}>
            Learn how tourism works, how to welcome visitors, and recommend experiences responsibly in South Africa.
          </p>
          
          <div className={styles.progressCard}>
            <div className={styles.progressHeader}>
              <span className={styles.progressText}>Course Progress</span>
              <span className={styles.progressValue}>40%</span>
            </div>
            <div className={styles.progressBarBg}>
              <div className={styles.progressBarFill} style={{ width: '40%' }}></div>
            </div>
          </div>
        </section>

        {/* Tip Card */}
        <section className={`${styles.tipSection} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
          <div className={styles.tipCard}>
            <div className={styles.tipIcon}>
              <Lightbulb size={24} color="var(--primary-color)" />
            </div>
            <div>
              <h3 className={styles.tipTitle}>Today&apos;s Tip</h3>
              <p className={styles.tipText}>
                Tourism professionals should always greet visitors warmly and offer clear information about local attractions.
              </p>
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className={`${styles.actionSection} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
          <Link href="/lesson" className={styles.continueButton}>
            <PlayCircle size={20} />
            <span>Continue Lesson</span>
          </Link>
          
          <Link href="/grio" className={styles.grioButton}>
            <MessageSquarePlus size={20} />
            <span>Ask GRIO</span>
          </Link>
        </section>

        {/* Modules List */}
        <section className={`${styles.modulesSection} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
          <h2 className={styles.sectionTitle}>Course Modules</h2>
          
          <div className={styles.modulesList}>
            {modules.map((mod) => (
              <div key={mod.id} className={`${styles.moduleCard} ${styles[mod.status]}`}>
                <div className={styles.moduleStatus}>
                  {mod.status === 'completed' && <CheckCircle2 size={24} className={styles.completedIcon} />}
                  {mod.status === 'in-progress' && <Circle size={24} className={styles.inProgressIcon} />}
                  {mod.status === 'locked' && <Circle size={24} className={styles.lockedIcon} />}
                </div>
                <div className={styles.moduleInfo}>
                  <p className={styles.moduleTag}>Module {mod.id}</p>
                  <h3 className={styles.moduleTitle}>{mod.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
