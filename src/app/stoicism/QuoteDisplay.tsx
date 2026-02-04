'use client';

import { useState } from 'react';
import { stoicQuotes } from '../../utils/stoic/quotes';

export default function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState(() =>
    stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)]
  );

  const getNewQuote = () => {
    let newQuote;
    do {
      newQuote = stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)];
    } while (newQuote.id === currentQuote.id); // Avoid same quote consecutively
    setCurrentQuote(newQuote);
  };

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '2rem',
        maxWidth: '600px',
        padding: '20px',
        textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)',
        lineHeight: '1.4',
        marginBottom: '40px'
      }}>
        <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>
          "{currentQuote.quote}"
        </p>
        <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>
          - {currentQuote.author}
        </p>
      </div>
      <button
        onClick={getNewQuote}
        style={{
          padding: '12px 24px',
          fontSize: '1.2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
        }}
        onMouseOver={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          target.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }}
        onMouseOut={(e) => {
          const target = e.target as HTMLButtonElement;
          target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        }}
      >
        New Quote
      </button>
    </div>
  );
}