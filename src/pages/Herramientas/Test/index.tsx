import React, { useState } from 'react';
import { FaBrain, FaLightbulb, FaStar, FaPlay } from 'react-icons/fa';
import styles from './Test.module.css';

const Test: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'indicaciones' | 'pruebas'>('indicaciones');

  const pruebasNinos = [
    {
      nombre: 'Test (Pro-Cálculo) - 6 años',
      descripcion: 'Ejercicios básicos de sumas y restas para niños de 6 años.',
      enlace: '/test/pro-calculo-6',
    },
    {
      nombre: 'Test (Pro-Cálculo) - 7 años',
      descripcion: 'Operaciones matemáticas con lógica sencilla para niños de 7 años.',
      enlace: '/test/pro-calculo-7',
    },
    {
      nombre: 'Test (Pro-Cálculo) - 8 años',
      descripcion: 'Problemas matemáticos y desafíos interactivos para niños de 8 años.',
      enlace: '/test/pro-calculo-8',
    }
  ];

  return (
    <main className={styles.mediaContainer}>
      <section className={styles.titleSection}>
        <h1 className={styles.mediaTitle}>
          <img src="/img/Medialab.png" alt="Logo de Media Lab" className={styles.logo} />
        </h1>
      </section>
      <nav className={styles.navTabs}>
        <button
          className={`${styles.tab} ${activeTab === 'indicaciones' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('indicaciones')}
        >
          Indicaciones
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'pruebas' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('pruebas')}
        >
          Pruebas para niños
        </button>
      </nav>
      <div className={styles.contentContainer}>
        {activeTab === 'indicaciones' && (
          <section className={styles.indicacionesSection}>
            <h2 className={styles.sectionTitle}>🌟 Pro-Cálculo</h2>
            <p className={styles.introText}>
              ¡Bienvenido a <b>Pro-Cálculo</b>! Un juego divertido para poner a prueba tu inteligencia con los números.
            </p>
            <div className={styles.instructionsGrid}>
              <div className={styles.instructionCard}>
                <FaLightbulb className={styles.icon} />
                <h3>🧐 Observa bien</h3>
                <p>Lee con calma cada pregunta y piensa en la respuesta correcta.</p>
              </div>
              <div className={styles.instructionCard}>
                <img src="/img/Observa.png" alt="Números" className={styles.instructionImage} />
                <h3>🧠 Usa tu mente</h3>
                <p>Trata de resolver los ejercicios sin ayuda. ¡Tú puedes!</p>
              </div>
              <div className={styles.instructionCard}>
                <FaStar className={styles.icon} />
                <h3>🏆 ¡Diviértete!</h3>
                <p>Recuerda que aprender es como un juego. ¡Hazlo con emoción!</p>
              </div>
            </div>
            <button 
              className={styles.startTestButton}
              onClick={() => setActiveTab('pruebas')} // ✅ Cambia a la pestaña "Pruebas para niños"
            >
              <FaPlay className={styles.buttonIcon} /> ¡Comenzar prueba!
            </button>
          </section>
        )}

        {activeTab === 'pruebas' && (
          <section className={styles.pruebasSection}>
            <h2 className={styles.sectionTitle}>🎯 Pruebas de Cálculo para niños</h2>
            <div className={styles.pruebasGrid}>
              {pruebasNinos.map((prueba) => (
                <article key={prueba.nombre} className={styles.pruebaCard}>
                  <FaBrain className={styles.testIcon} />
                  <h3 className={styles.pruebaName}>{prueba.nombre}</h3>
                  <p className={styles.pruebaDescription}>{prueba.descripcion}</p>
                  <a href={prueba.enlace} className={styles.startTestButton}>
                    Iniciar Test
                  </a>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Test;
