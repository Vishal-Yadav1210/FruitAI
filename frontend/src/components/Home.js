import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Add CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>Fruit.AI</h1>
      <div className="services">
        <Link to="/chatbot" className="service-button">Chatbot</Link>
        <Link to="/translator" className="service-button">Translator</Link>
        <Link to="/faq" className="service-button">FAQs</Link>
        <Link to="/about" className="service-button">About</Link>
      </div>
    </div>
  );
};

export default Home;
