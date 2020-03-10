import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Sample.module.css';

export default function Sample() {
  const { t } = useTranslation('sample', { useSuspense: false });

  return <div className={styles.sampleHolder}>{t('title')}</div>;
}
