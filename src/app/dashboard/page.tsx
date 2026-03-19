"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, TrendingUp, Users, LayoutDashboard, BrainCircuit, ChevronDown, ChevronUp } from "lucide-react";
import styles from "./page.module.css";

export default function LecturerDashboard() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const learners = [
    { name: "Nomsa", progress: 60, status: "on-track", modulesComplete: 1 },
    { name: "Thabo", progress: 80, status: "excelling", modulesComplete: 2 },
    { name: "Lerato", progress: 40, status: "needs-support", modulesComplete: 0 }
  ];

  const commonQuestions = [
    {
      q: "What is the difference between a tourist and a traveller?",
      a: "A tourist is someone who travels for pleasure and uses local services (hotels, tours). Every tourist is a traveller, but not every traveller is a tourist (e.g., someone commuting for work)."
    },
    {
      q: "How should I greet international visitors?",
      a: "Always greet them clearly, warmly, and politely. Be mindful of personal space and use professional titles unless invited otherwise. A simple smile and 'Welcome to South Africa' goes a long way."
    },
    {
      q: "Why is tourism important for South Africa?",
      a: "Tourism creates jobs, brings foreign investment into the economy, supports local businesses, and funds the conservation of our wildlife and natural heritage sites."
    }
  ];

  const toggleQuestion = (idx: number) => {
    if (expandedQuestion === idx) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(idx);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.dashboardHeader}>
        <div className={styles.headerLeft}>
          <Link href="/home" className={styles.backButton}>
            <ChevronLeft size={24} />
          </Link>
          <div className={styles.titleGroup}>
            <span className={styles.kicker}>Educator View</span>
            <h1 className={styles.headerTitle}>Lecturer Dashboard</h1>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        
        {/* Top Stats */}
        <section className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <Users size={20} className={styles.statIcon} />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statValue}>124</p>
              <p className={styles.statLabel}>Active Learners</p>
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statIconWrapper}>
              <TrendingUp size={20} className={styles.statIcon} />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statValue}>65%</p>
              <p className={styles.statLabel}>Avg Progress</p>
            </div>
          </div>
        </section>

        {/* Learner Progress */}
        <section className={styles.cardSection}>
          <div className={styles.sectionHeader}>
            <LayoutDashboard size={20} className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Learner Progress</h2>
          </div>
          
          <div className={styles.learnersList}>
            {learners.map((learner) => (
              <div key={learner.name} className={styles.learnerRow}>
                <div className={styles.learnerInfo}>
                  <p className={styles.learnerName}>{learner.name}</p>
                  <p className={styles.learnerMeta}>
                    {learner.modulesComplete}/3 Lessons Complete
                  </p>
                </div>
                
                <div className={styles.progressContainer}>
                  <div className={styles.progressHeader}>
                    {learner.status === "needs-support" && (
                      <span className={styles.supportBadge}>Needs Support</span>
                    )}
                    <span className={styles.progressValue}>{learner.progress}%</span>
                  </div>
                  <div className={styles.progressBarBg}>
                    <div 
                      className={`${styles.progressBarFill} ${styles[learner.status]}`}
                      style={{ width: `${learner.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Insights - Common Questions */}
        <section className={styles.cardSection}>
          <div className={styles.sectionHeader}>
            <BrainCircuit size={20} className={styles.sectionIcon} color="var(--primary-color)" />
            <h2 className={styles.sectionTitle}>GRIO AI Insights</h2>
          </div>
          <p className={styles.insightsDesc}>Common questions asked by your learners today. Click to see GRIO&apos;s answers:</p>
          
          <ul className={styles.questionsList}>
            {commonQuestions.map((item, idx) => (
              <li key={idx} className={styles.questionItem}>
                <div 
                  className={`${styles.questionBubble} ${expandedQuestion === idx ? styles.active : ''}`}
                  onClick={() => toggleQuestion(idx)}
                >
                  <span>&quot;{item.q}&quot;</span>
                  {expandedQuestion === idx ? (
                    <ChevronUp size={16} color="var(--primary-color)" />
                  ) : (
                    <ChevronDown size={16} color="var(--text-secondary)" />
                  )}
                </div>
                {expandedQuestion === idx && (
                  <div className={styles.answerBox}>
                    <strong>GRIO Replied:</strong> {item.a}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
        
      </main>
    </div>
  );
}
