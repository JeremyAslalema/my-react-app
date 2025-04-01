import React, { useState } from 'react';
import { FaArrowRight, FaCheck, FaTimes } from 'react-icons/fa';
import styles from './ProCalculo6.module.css';

const ProCalculo: React.FC = () => {
  const [currentTest, setCurrentTest] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  // Versión simplificada del test
  const tests = [
    {
      id: 1,
      title: 'Cálculo mental',
      questions: [
        { id: '1-1', text: '2 + 3 =', answer: '5' },
        { id: '1-2', text: '5 - 1 =', answer: '4' }
      ]
    },
    {
      id: 2,
      title: 'Enumeración',
      questions: [
        { id: '2-1', text: 'Cuenta del 1 al 5:', answer: '1,2,3,4,5' },
        { id: '2-2', text: 'Cuenta del 5 al 1:', answer: '5,4,3,2,1' }
      ]
    }
  ];

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentTest < tests.length - 1) {
      setCurrentTest(currentTest + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentTest > 0) {
      setCurrentTest(currentTest - 1);
    }
  };

  const calculateResults = () => {
    let correct = 0;
    tests.forEach(test => {
      test.questions.forEach(question => {
        if (answers[question.id] === question.answer) {
          correct++;
        }
      });
    });
    return correct;
  };

  return (
    <div className={styles.container}>
      <h1>Test Pro-Cálculo (6 años)</h1>
      
      {!showResults ? (
        <div className={styles.testSection}>
          <h2>{tests[currentTest].title}</h2>
          
          <div className={styles.questions}>
            {tests[currentTest].questions.map(question => (
              <div key={question.id} className={styles.question}>
                <p>{question.text}</p>
                <input
                  type="text"
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                  className={styles.input}
                />
              </div>
            ))}
          </div>

          <div className={styles.buttons}>
            {currentTest > 0 && (
              <button onClick={handlePrev} className={styles.button}>
                Anterior
              </button>
            )}
            <button onClick={handleNext} className={styles.button}>
              {currentTest < tests.length - 1 ? 'Siguiente' : 'Finalizar'}
              <FaArrowRight />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.results}>
          <h2>Resultados</h2>
          <p>Respuestas correctas: {calculateResults()} de {tests.flatMap(t => t.questions).length}</p>
          
          <div className={styles.details}>
            {tests.map(test => (
              <div key={test.id}>
                <h3>{test.title}</h3>
                <ul>
                  {test.questions.map(question => {
                    const isCorrect = answers[question.id] === question.answer;
                    return (
                      <li key={question.id} className={isCorrect ? styles.correct : styles.incorrect}>
                        {question.text} 
                        {isCorrect ? <FaCheck /> : <FaTimes />}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <button 
            onClick={() => {
              setCurrentTest(0);
              setAnswers({});
              setShowResults(false);
            }}
            className={styles.button}
          >
            Volver a empezar
          </button>
        </div>
      )}
    </div>
  );
};

export default ProCalculo;