import type { Metadata } from 'next';
import { getPublicEnvironment } from '@/lib/env';
import './globals.css';

const { appUrl } = getPublicEnvironment();

export const metadata: Metadata = {
  metadataBase: appUrl,
  title: 'ServiceHub | Local services, made simple',
  description:
    'Find trusted local professionals and book the help you need, all in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
