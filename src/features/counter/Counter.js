import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { decrement, increment, incrementByAmount, selectCount } from './counterSlice';
import Sample from '../../components/Sample/Sample';
import styles from './Counter.module.css';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const [showSample, setShowSample] = useState(false);
  const { t } = useTranslation('common', { useSuspense: false });

  return (
    <div>
      {showSample ? (
        <Sample />
      ) : (
        <button
          className={styles.button}
          aria-label="Show Sample Component"
          onClick={() => setShowSample(true)}
          type="button"
        >
          Show Sample Component
        </button>
      )}

      <h1>{t('helloWord')}</h1>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          type="button"
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          type="button"
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount({ amount: Number(incrementAmount) || 0 }))}
          type="button"
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
