import './styles.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Paths from '../../constants/path';
import React from 'react';

function Home() {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = () => {
    const current = i18n.language;
    i18n.changeLanguage(current === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className="home-container">
      <div className="home-title">{t('home')}</div>
      <button className="button" onClick={handleChangeLanguage}>
        {t('buttons.change-language')}
      </button>
      <Link className="button" to={Paths.USERS}>
        {t('users')}
      </Link>
      <Link className="button" to={Paths.POSTS}>
        {t('posts')}
      </Link>
    </div>
  );
}

export default Home;
