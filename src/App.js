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
  }

  const stepForward = () => {
    setActiveIndex((activeIndex) => activeIndex + 1);
  }

  const startAgain = () => {
    setActiveIndex(0);
  }

  const chooseStep = (stepNumber) => {
    setActiveIndex(stepNumber);
  }

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
                <button onClick={() => chooseStep(Number(id) - 1)} className={styles['steps-item-button']}>{Number(id)}</button>
                {/* При клике на кнопку установка выбранного шага в качестве активного */}
                {title}
              </li>
            )}
          </ul>
          <div className={styles['buttons-container']}>
            <button className={styles.button} onClick={stepBack} disabled={activeIndex === 0}>Назад</button>
            {activeIndex === steps.length - 1 ? <button className={styles.button} onClick={startAgain}>Начать сначала</button> : <button className={styles.button} onClick={stepForward}>
              Далее
            </button>}

          </div>
        </div>
      </div>
    </div>
  );
};
