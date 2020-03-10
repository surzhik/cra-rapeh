import React from 'react';
import i18n from '../../i18n';
import styles from './LangsSwitch.module.css';

const langs = {
  en: 'en',
  es: 'es',
};

export default function LangsSwitch() {
  const changeLang = event => {
    i18n.changeLanguage(event.target.dataset.lang);
  };

  return (
    <div className={styles.langsHolder}>
      <ul>
        {Object.keys(langs).map(lang => (
          <li key={lang}>
            <button type="button" onClick={changeLang} data-lang={langs[lang]}>
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
