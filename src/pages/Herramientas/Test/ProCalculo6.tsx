import React, { useState } from 'react';
import { FaArrowLeft, FaCheck, FaTimes } from 'react-icons/fa';
import styles from './ProCalculo.module.css';

const ProCalculo6: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  // Preguntas para niños de 6 años
  const questions = [
    {
      question: "¿Cuánto es 3 + 4?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "¿Cuánto es 10 - 3?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "Si tienes 5 manzanas y te dan 2 más, ¿cuántas manzanas tienes en total?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "¿Qué número falta: 2, 4, 6, __?",
      options: ["7", "8", "9", "10"],
      answer: "8"
    },
    {
      question: "¿Cuánto es 2 + 2 + 2?",
      options: ["4", "5", "6", "8"],
      answer: "6"
    },
  ];

  const handleAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].answer;
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setUserAnswers([...userAnswers, selectedAnswer]);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  return (
    <main className={styles.testContainer}>
      <section className={styles.testHeader}>
        <h1 className={styles.testTitle}>
          <img src="/img/Medialab.png" alt="Logo de Media Lab" className={styles.logoSmall} />
          Pro-Cálculo - 6 años
        </h1>
        <a href="/test" className={styles.backButton}>
          <FaArrowLeft /> Volver
        </a>
      </section>

      {!showResult ? (
        <section className={styles.questionSection}>
          <div className={styles.questionCounter}>
            Pregunta {currentQuestion + 1} de {questions.length}
          </div>
          <div className={styles.questionCard}>
            <h2 className={styles.questionText}>{questions[currentQuestion].question}</h2>
            <div className={styles.optionsGrid}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={styles.optionButton}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.resultSection}>
          <h2 className={styles.resultTitle}>
            {score > (questions.length / 2) ? "¡Muy bien! 🎉" : "¡Sigue practicando! 💪"}
          </h2>
          <div className={styles.scoreCard}>
            <p className={styles.scoreText}>
              Has acertado <span className={styles.scoreHighlight}>{score}</span> de {questions.length} preguntas
            </p>
            <div className={styles.resultSummary}>
              {questions.map((q, index) => (
                <div key={index} className={styles.resultItem}>
                  <span>Pregunta {index + 1}: </span>
                  {userAnswers[index] === q.answer ? (
                    <span className={styles.correct}><FaCheck /> Correcto</span>
                  ) : (
                    <span className={styles.incorrect}>
                      <FaTimes /> Incorrecto (Respuesta correcta: {q.answer})
                    </span>
                  )}
                </div>
              ))}
            </div>
            <button className={styles.restartButton} onClick={restartTest}>
              Intentar de nuevo
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProCalculo6;