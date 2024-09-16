// components/Translator.js
import React, { useState } from 'react';
import './Translator.css';

const Translator = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const handleTranslate = async () => {
    // Dummy translation logic, can replace with API call
    setTranslation(`Translated: ${text}`);
  };

  return (
    <div className="translator-container">
      <h1>Translator</h1>
      <div className="translator-box">
        <input
          type="text"
          placeholder="Enter text"
          className="input-box"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleTranslate} className="translate-button">
          Translate
        </button>
        {translation && <div className="translation-result">{translation}</div>}
      </div>
    </div>
  );
};

export default Translator;
