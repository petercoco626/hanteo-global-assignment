import type { Metadata } from 'next';
import './globals.css';
import { ClientLayout } from './client-layout';

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
      <body className="w-dvw h-dvh">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
