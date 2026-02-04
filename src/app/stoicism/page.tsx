import { Metadata } from 'next';
import QuoteDisplay from './QuoteDisplay';

export const metadata: Metadata = {
  title: 'Daily Stoic Quotes | Triviabash',
  description: 'Discover random and inspiring stoic quotes from ancient philosophers. Find timeless wisdom from Marcus Aurelius, Seneca, and Epictetus to guide your daily life.',
  keywords: 'stoicism, quotes, Marcus Aurelius, Seneca, Epictetus, philosophy, wisdom, inspiration',
  openGraph: {
    title: 'Daily Stoic Quotes | Triviabash',
    description: 'Random inspiring stoic quotes for daily wisdom and guidance.',
    type: 'website',
  },
};

export default function StoicismPage() {
  return <QuoteDisplay />;
}