import Link from 'next/link';
import { Metadata } from 'next';
import { stoicQuotes } from '../../../utils/stoic/quotes';

export const metadata: Metadata = {
  title: 'Stoic Philosophers | Triviabash',
  description: 'Explore quotes from ancient stoic philosophers including Marcus Aurelius, Seneca, and Epictetus. Discover timeless wisdom from the greatest minds of philosophy.',
  keywords: 'stoic philosophers, Marcus Aurelius, Seneca, Epictetus, ancient philosophy, wisdom, quotes',
  openGraph: {
    title: 'Stoic Philosophers | Triviabash',
    description: 'Explore wisdom from Marcus Aurelius, Seneca, and Epictetus.',
    type: 'website',
  },
};

// Get unique authors and their quote counts
function getAuthorsWithCounts() {
  const authorCounts = stoicQuotes.reduce((acc, quote) => {
    acc[quote.author] = (acc[quote.author] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(authorCounts)
    .map(([author, count]) => ({ author, count: count as number }))
    .sort((a, b) => b.count - a.count); // Sort by quote count descending
}

export default function AuthorsPage() {
  const authors = getAuthorsWithCounts();

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Link
            href="/stoicism"
            style={{
              color: '#B0B0B0',
              textDecoration: 'none',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              display: 'inline-block'
            }}
          >
            ← Back to Stoic Quotes
          </Link>

          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '10px',
            background: 'linear-gradient(45deg, #B0B0B0, #808080)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Stoic Philosophers
          </h1>

          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9,
            marginBottom: '30px'
          }}>
            Discover wisdom from the greatest minds of ancient philosophy
          </p>
        </div>

        {/* Authors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {authors.map(({ author, count }) => (
            <Link
              key={author}
              href={`/stoicism/authors/${encodeURIComponent(author.toLowerCase().replace(' ', '-'))}`}
              style={{
                display: 'block',
                padding: '25px',
                backgroundColor: '#111',
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.3s ease',
                border: '2px solid transparent',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)'
              }}
              className="author-card"
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #B0B0B0, #808080)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginRight: '15px',
                  color: 'black'
                }}>
                  {author.charAt(0)}
                </div>
                <div>
                  <h3 style={{
                    margin: '0 0 5px 0',
                    fontSize: '1.3rem',
                    color: '#B0B0B0'
                  }}>
                    {author}
                  </h3>
                  <p style={{
                    margin: 0,
                    opacity: 0.7,
                    fontSize: '0.9rem'
                  }}>
                    {count} quotes
                  </p>
                </div>
              </div>

              <p style={{
                margin: 0,
                opacity: 0.8,
                fontSize: '0.95rem',
                lineHeight: '1.4'
              }}>
                {author === 'Marcus Aurelius' && 'Roman Emperor and Stoic philosopher known for his meditations on virtue and duty.'}
                {author === 'Seneca' && 'Roman Stoic philosopher, statesman, and advisor to Emperor Nero.'}
                {author === 'Epictetus' && 'Greek Stoic philosopher who taught that philosophy is a way of life.'}
              </p>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          paddingTop: '30px',
          borderTop: '1px solid #333',
          opacity: 0.7
        }}>
          <Link
            href="/stoicism"
            style={{
              color: '#B0B0B0',
              textDecoration: 'none',
              fontSize: '1rem'
            }}
          >
            🌟 Get Random Quote
          </Link>
        </div>
      </div>
    </div>
  );
}