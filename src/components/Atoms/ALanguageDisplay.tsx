import React from 'react';

const ALanguageDisplay = () => {
  const language = localStorage.getItem('language') || 'en';

  return (
    <div>
      <p>Current Language: {language === 'en' ? 'English' : 'Russian'}</p>
    </div>
  );
};

export default ALanguageDisplay;
