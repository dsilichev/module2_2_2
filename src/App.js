import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
  // Можно задать 2 состояния — steps и activeIndex
  let [steps, setSteps] = useState(data);
  let [activeIndex, setActiveIndex] = useState(0);
  // И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала
  const stepBack = () => {
    setActiveIndex(activeIndex => activeIndex - 1);
    console.log(isLastStep);
  }

  const stepForward = () => {
    setActiveIndex((activeIndex) => activeIndex + 1);
    if (activeIndex > 0) {
    }
  }

  const startAgain = () => {
    setActiveIndex(0);
  }
  // И 2 переменных-флага — находимся ли мы на первом шаге, и находимся ли на последнем
  let isFirstStep = true;
  let isLastStep = false;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {/* Для получения активного контента использйте steps и activeIndex */}
            {steps[activeIndex].content}
          </div>
          <ul className={styles['steps-list']}>
            {/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
            {steps.map(({ id, title }) =>
              <li key={id} className={styles['steps-item'] + ' ' + (Number(id) <= activeIndex + 1 ? styles.done : '') + ' ' + (Number(id) === activeIndex + 1 ? styles.active : '')}>
                {/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
                <button className={styles['steps-item-button']}>{Number(id)}</button>
                {/* При клике на кнопку установка выбранного шага в качестве активного */}
                {title}
              </li>
            )}

          </ul>
          <div className={styles['buttons-container']}>
            <button className={styles.button} onClick={stepBack} disabled={activeIndex === 0}>Назад</button>
            {activeIndex === steps.length - 1 ? <button className={styles.button} onClick={startAgain}>Начать сначала</button> : <button className={styles.button} onClick={stepForward}>
              Далее
              {/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
              {/* Или заменять всю кнопку в зависимости от условия */}
            </button>}
            
          </div>
        </div>
      </div>
    </div>
  );
};
