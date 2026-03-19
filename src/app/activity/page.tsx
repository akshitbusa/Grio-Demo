"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, CheckCircle2, XCircle, Trophy } from "lucide-react";
import styles from "./page.module.css";

export default function PracticeActivity() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const options = [
    {
      id: "A",
      text: "Tell them to search online.",
      isCorrect: false
    },
    {
      id: "B",
      text: "Recommend visiting Table Mountain, exploring Bo-Kaap, and trying a local restaurant. Also remind them to check weather and transport options.",
      isCorrect: true
    },
    {
      id: "C",
      text: "Tell them tourism staff cannot recommend places.",
      isCorrect: false
    }
  ];

  const handleSubmit = () => {
    if (selectedOption) setIsSubmitted(true);
  };

  const isCorrect = selectedOption === "B";

  return (
    <div className={styles.pageContainer}>
      <header className={styles.activityHeader}>
        <div className={styles.headerLeft}>
          <Link href="/lesson" className={styles.backButton}>
            <ChevronLeft size={24} />
          </Link>
          <div className={styles.titleGroup}>
            <span className={styles.kicker}>Practice Activity</span>
            <h1 className={styles.headerTitle}>Help a Visitor Plan a Day</h1>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.scenarioCard}>
          <h2 className={styles.scenarioTitle}>Scenario</h2>
          <p className={styles.scenarioText}>
            A tourist has one free day in Cape Town and wants to experience nature, culture, and local food.
          </p>
          <p className={styles.instruction}>Choose the best response to assist them:</p>
        </div>

        <div className={styles.optionsList}>
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            const showFeedback = isSubmitted && isSelected;
            
            let optionStateClass = "";
            if (isSelected) optionStateClass = styles.selected;
            if (showFeedback && option.isCorrect) optionStateClass = styles.correct;
            if (showFeedback && !option.isCorrect) optionStateClass = styles.incorrect;

            return (
              <button
                key={option.id}
                onClick={() => !isSubmitted && setSelectedOption(option.id)}
                className={`${styles.optionCard} ${optionStateClass}`}
                disabled={isSubmitted}
              >
                <div className={styles.optionHeader}>
                  <span className={styles.optionBadge}>Option {option.id}</span>
                  {showFeedback && option.isCorrect && <CheckCircle2 size={20} className={styles.correctIcon} />}
                  {showFeedback && !option.isCorrect && <XCircle size={20} className={styles.incorrectIcon} />}
                </div>
                <p className={styles.optionText}>{option.text}</p>
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className={`${styles.feedbackCard} ${isCorrect ? styles.feedbackSuccess : styles.feedbackError} animate-fade-in`}>
            {isCorrect ? (
              <>
                <div className={styles.feedbackHeader}>
                  <Trophy size={20} className={styles.trophyIcon} />
                  <h3>Great work!</h3>
                </div>
                <p>Tourism professionals combine local knowledge with helpful advice to improve the visitor experience.</p>
              </>
            ) : (
              <>
                <div className={styles.feedbackHeader}>
                  <h3>Not quite right</h3>
                </div>
                <p>Think about how you can add value as a tourism professional rather than dismissing the visitor&apos;s request.</p>
              </>
            )}
          </div>
        )}
      </main>

      <footer className={styles.bottomActions}>
        {!isSubmitted ? (
          <button 
            className={`${styles.primaryButton} ${!selectedOption ? styles.disabled : ''}`}
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            Submit Answer
          </button>
        ) : (
          <Link href="/home" className={`${styles.primaryButton} ${styles.completeButton}`}>
            Mark Complete
          </Link>
        )}
      </footer>
    </div>
  );
}
