import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Faq.css'; // Add CSS for styling

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/faqs'); // Replace with your backend API
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq._id} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
