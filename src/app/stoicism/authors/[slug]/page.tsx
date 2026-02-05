import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { stoicQuotes } from '../../../../utils/stoic/quotes';

// Get all possible author slugs for static generation
export async function generateStaticParams() {
  const authors = [...new Set(stoicQuotes.map(quote => quote.author))];
  return authors.map((author) => ({
    slug: author.toLowerCase().replace(' ', '-'),
  }));
}

// Generate metadata for each author page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const authorName = resolvedParams.slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const authorQuotes = stoicQuotes.filter(quote =>
    quote.author.toLowerCase() === authorName.toLowerCase()
  );

  if (authorQuotes.length === 0) {
    return {
      title: 'Author Not Found | Triviabash'
    };
  }

  return {
    title: `${authorName} Quotes | Triviabash`,
    description: `Explore ${authorQuotes.length} inspiring quotes from ${authorName}, the ancient Stoic philosopher. Discover timeless wisdom and philosophical insights.`,
    keywords: `${authorName}, stoic quotes, philosophy, wisdom, ancient philosophy, ${authorName.toLowerCase()} quotes`,
    openGraph: {
      title: `${authorName} Quotes | Triviabash`,
      description: `Discover ${authorQuotes.length} quotes from ${authorName}.`,
      type: 'website',
    },
  };
}

interface AuthorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const resolvedParams = await params;
  const authorName = resolvedParams.slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  const authorQuotes = stoicQuotes.filter(quote =>
    quote.author.toLowerCase() === authorName.toLowerCase()
  );

  if (authorQuotes.length === 0) {
    notFound();
  }

  // Get author bio
  const getAuthorBio = (author: string) => {
    switch (author) {
      case 'Marcus Aurelius':
        return 'Marcus Aurelius (121–180 AD) was Roman Emperor from 161 to 180 AD and a Stoic philosopher. He is best known for his work "Meditations," which contains his private notes on Stoic philosophy.';
      case 'Seneca':
        return 'Lucius Annaeus Seneca (c. 4 BC – 65 AD) was a Roman Stoic philosopher, statesman, and advisor to Emperor Nero. He wrote extensively on ethics, philosophy, and tragedy.';
      case 'Epictetus':
        return 'Epictetus (c. 50–135 AD) was a Greek Stoic philosopher. Born into slavery, he became one of the most influential Stoic teachers, emphasizing that philosophy is a way of life.';
      default:
        return 'A renowned Stoic philosopher whose wisdom continues to inspire generations.';
    }
  };

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <Link
            href="/stoicism/authors"
            style={{
              color: '#B0B0B0',
              textDecoration: 'none',
              fontSize: '1.1rem',
              marginBottom: '20px',
              display: 'inline-block'
            }}
          >
            ← Back to Authors
          </Link>

          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '10px',
            background: 'linear-gradient(45deg, #B0B0B0, #808080)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {authorName}
          </h1>

          <p style={{
            fontSize: '1.1rem',
            opacity: 0.9,
            marginBottom: '20px',
            lineHeight: '1.5'
          }}>
            {getAuthorBio(authorName)}
          </p>

          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#606060',
            color: 'white',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            {authorQuotes.length} Quotes
          </div>
        </div>

        {/* Quotes Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
          gap: '20px'
        }}>
          {authorQuotes.map((quote) => (
            <div
              key={quote.id}
              style={{
                padding: '25px',
                backgroundColor: '#111',
                borderRadius: '12px',
                border: '1px solid #333',
                transition: 'all 0.3s ease'
              }}
              className="quote-card"
            >
              <blockquote style={{
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: '1.6',
                fontStyle: 'italic',
                marginBottom: '15px',
                color: '#B0B0B0'
              }}>
                "{quote.quote}"
              </blockquote>

              <div style={{
                textAlign: 'right',
                opacity: 0.7,
                fontSize: '0.9rem'
              }}>
                — {authorName}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px',
          paddingTop: '30px',
          borderTop: '1px solid #333'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <Link
              href="/stoicism"
              style={{
                color: '#B0B0B0',
                textDecoration: 'none',
                fontSize: '1rem',
                marginRight: '20px'
              }}
            >
              🌟 Get Random Quote
            </Link>
            <Link
              href="/stoicism/authors"
              style={{
                color: '#B0B0B0',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              📚 Browse Authors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}