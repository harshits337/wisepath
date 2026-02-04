'use client';

import { useState } from 'react';
import { stoicQuotes } from '../../utils/stoic/quotes';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export default function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState(() =>
    stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)]
  );

  const getNewQuote = () => {
    // Track new quote button click event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'new_quote_click', {
        event_category: 'engagement',
        event_label: 'stoic_quotes'
      });
    }

    let newQuote;
    do {
      newQuote = stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)];
    } while (newQuote.id === currentQuote.id); // Avoid same quote consecutively
    setCurrentQuote(newQuote);
  };

  return (
    <><div style={{
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
              maxWidth: '800px',
              width: '100%',
              textAlign: 'center',
              marginBottom: '40px'
          }}>
              <h1 style={{
                  fontSize: '2.5rem',
                  marginBottom: '20px',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                  fontWeight: 'bold'
              }}>
                  Stoic Quotes on Life, Discipline and Wisdom
              </h1>
              <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '30px',
                  opacity: 0.9,
                  maxWidth: '600px',
                  margin: '0 auto 30px auto'
              }}>
              Stoicism is an ancient Greek philosophy that teaches the development of self-control and fortitude as a means to overcome destructive emotions. These timeless quotes from philosophers like Marcus Aurelius, Seneca, and Epictetus offer profound insights into living a virtuous life. Whether you're seeking motivation for personal growth, guidance through challenges, or simply inspiration for daily living, these stoic teachings provide practical wisdom that transcends time. Discover the power of focusing on what you can control and finding peace in acceptance.
          </p>
      </div><div style={{
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
          </div><button
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
              } }
              onMouseOut={(e) => {
                  const target = e.target as HTMLButtonElement;
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              } }
          >
              New Quote
          </button>
      </div>
    </>
  );
}