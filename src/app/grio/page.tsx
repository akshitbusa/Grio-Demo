"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Sparkles, Send, MoreHorizontal } from "lucide-react";
import styles from "./page.module.css";

type QuestionId = 'q1' | 'q2' | 'q3' | null;

export default function GriOScreen() {
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionId>(null);
  const [inputVal, setInputVal] = useState("");

  const questions = {
    q1: "What is the difference between domestic and international tourists?",
    q2: "How do I deal with a difficult visitor?",
    q3: "Can you explain sustainable tourism simply?"
  };

  const responses = {
    q1: (
      <div className={styles.botContent}>
        <p><strong>Domestic tourists</strong> are people travelling within their own country. For example, someone from Gauteng visiting Cape Town.</p>
        <p><strong>International tourists</strong> are visitors who travel from another country. For example, a visitor from Germany arriving in South Africa.</p>
        <p className={styles.subtext}>Tourism workers often provide extra help to international visitors because they may need assistance with language, transport, or local customs.</p>

        <div className={styles.quickCheck}>
          <p className={styles.quickCheckLabel}>Quick check 🧠</p>
          <p>If a family travels from Durban to the Drakensberg for a holiday, are they domestic or international tourists?</p>
          <div className={styles.quickCheckActions}>
            <button className={styles.chipButton}>Domestic</button>
            <button className={styles.chipButton}>International</button>
          </div>
        </div>
      </div>
    ),
    q2: (
      <div className={styles.botContent}>
        <p>When dealing with a difficult visitor, you should use the <strong>LEARN</strong> model:</p>
        <p><strong>L</strong>isten carefully without interrupting.</p>
        <p><strong>E</strong>mpathize with their frustration.</p>
        <p><strong>A</strong>pologize for the inconvenience.</p>
        <p><strong>R</strong>eact by offering a clear solution.</p>
        <p><strong>N</strong>otify management if you cannot resolve it.</p>
        <p className={styles.subtext}>Remember to stay calm! It is rarely personal, they are just frustrated by a situation.</p>
      </div>
    ),
    q3: (
      <div className={styles.botContent}>
        <p><strong>Sustainable tourism</strong> means visiting a place and trying to make a positive impact on the environment, society, and economy.</p>
        <p>This includes doing things like reducing water use, buying locally made souvenirs, and respecting the cultural heritage of the area.</p>
        <p className={styles.subtext}>Think of it as "leaving a place better than how you found it".</p>
      </div>
    )
  };

  return (
    <div className={styles.pageContainer}>
      <header className={styles.chatHeader}>
        <div className={styles.headerLeft}>
          <Link href="/home" className={styles.backButton}>
            <ChevronLeft size={24} />
          </Link>
          <div className={styles.botProfile}>
            <div className={styles.botIconWrapper}>
              <Sparkles size={16} />
            </div>
            <div>
              <h2 className={styles.botName}>GRIO</h2>
              <span className={styles.botStatus}>Online</span>
            </div>
          </div>
        </div>
        <button className={styles.moreButton}>
          <MoreHorizontal size={24} />
        </button>
      </header>

      <main className={styles.chatArea}>
        <div className={styles.dateSeparator}>
          {new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
        </div>

        {selectedQuestion ? (
          <>
            {/* User Message */}
            <div className={`${styles.messageBubble} ${styles.user} animate-fade-in`}>
              <p>{questions[selectedQuestion]}</p>
            </div>

            {/* GRIO Response */}
            <div className={`${styles.messageBubble} ${styles.bot} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
              <div className={styles.botBubbleIcon}>
                <Sparkles size={14} />
              </div>
              {responses[selectedQuestion]}
            </div>
          </>
        ) : (
          <div className={`${styles.messageBubble} ${styles.bot} animate-fade-in`}>
            <div className={styles.botBubbleIcon}>
              <Sparkles size={14} />
            </div>
            <div className={styles.botContent}>
              <p>Hello! I am GRIO, your AI Learning Companion.</p>
              <p>What would you like assistance with today? Tap one of the questions below to start.</p>

              <div className={styles.inlineSuggestions}>
                <button
                  className={styles.inlineChip}
                  onClick={() => setSelectedQuestion('q1')}
                >
                  {questions.q1}
                </button>
                <button
                  className={styles.inlineChip}
                  onClick={() => setSelectedQuestion('q2')}
                >
                  {questions.q2}
                </button>
                <button
                  className={styles.inlineChip}
                  onClick={() => setSelectedQuestion('q3')}
                >
                  {questions.q3}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Re-added Input Area */}
      <footer className={styles.inputArea}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Ask GRIO anything..."
            className={styles.textField}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button className={`${styles.sendButton} ${inputVal ? styles.active : ''}`}>
            <Send size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
}
