import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hanteo global',
  description: 'k-pop chart',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-dvw h-dvh">{children}</body>
    </html>
  );
}
