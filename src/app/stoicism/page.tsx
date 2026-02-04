import { Metadata } from 'next';
import QuoteDisplay from './QuoteDisplay';

export const metadata: Metadata = {
  title: 'Stoic Wisdom - Random Inspiring Quotes',
  description: 'Discover random and inspiring stoic quotes from ancient philosophers. Find timeless wisdom from Marcus Aurelius, Seneca, and Epictetus to guide your daily life.',
  keywords: 'stoicism, quotes, Marcus Aurelius, Seneca, Epictetus, philosophy, wisdom, inspiration',
  openGraph: {
    title: 'Stoic Wisdom - Random Inspiring Quotes',
    description: 'Random inspiring stoic quotes for daily wisdom and guidance.',
    type: 'website',
  },
};

export default function StoicismPage() {
  return <QuoteDisplay />;
}