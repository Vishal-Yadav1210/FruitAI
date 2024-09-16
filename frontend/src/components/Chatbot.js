// components/Chatbot.js
import React, { useState } from 'react';
import './Chatbot.css';

const fruitData = [
  { id: 1, name: 'Orange', calories: '47 kcal' },
  { id: 2, name: 'Cucumber', calories: '16 kcal' },
  { id: 3, name: 'Tangerine', calories: '53 kcal' }
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    setMessages([...messages, { text: message }]);
  };

  return (
    <div className="chat-container">
      <h1>Chatbot</h1>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">{message.text}</div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          className="chat-input"
          placeholder="Type a message"
          onKeyPress={(e) => {
            if (e.key === 'Enter') sendMessage(e.target.value);
          }}
        />
      </div>
      <div className="fruit-list">
        {fruitData.map((fruit) => (
          <div key={fruit.id} className="fruit-card">
            <h3>{fruit.name}</h3>
            <p>{fruit.calories}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
