import { Metadata } from 'next';
import { stoicQuotes } from '../../utils/stoic/quotes';

export const metadata: Metadata = {
  title: 'Stoic Wisdom - Daily Quotes',
  description: 'Discover timeless wisdom through daily stoic quotes from ancient philosophers like Marcus Aurelius, Seneca, and Epictetus. Find inspiration and guidance for a virtuous life.',
  keywords: 'stoicism, quotes, Marcus Aurelius, Seneca, Epictetus, philosophy, wisdom',
  openGraph: {
    title: 'Stoic Wisdom - Daily Quotes',
    description: 'Daily stoic quotes for inspiration and wisdom.',
    type: 'website',
  },
};

export default function StoicismPage() {
  const randomQuote = stoicQuotes[Math.floor(Math.random() * stoicQuotes.length)];

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '2rem',
        maxWidth: '600px',
        padding: '20px',
        textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6)',
        lineHeight: '1.4'
      }}>
        <p style={{ marginBottom: '20px', fontStyle: 'italic' }}>
          "{randomQuote.quote}"
        </p>
        <p style={{ fontSize: '1.5rem', opacity: 0.8 }}>
          - {randomQuote.author}
        </p>
      </div>
    </div>
  );
}