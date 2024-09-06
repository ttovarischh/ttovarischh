import React from 'react';
import { useTranslation } from 'react-i18next';

const ALanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lng: any) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <button onClick={() => handleLanguageChange('en')}>English</button>
            <button onClick={() => handleLanguageChange('ru')}>Русский</button>
        </div>
    );
};

export default ALanguageSwitcher;
