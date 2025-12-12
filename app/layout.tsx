import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JasaBantu - Layanan Asisten Rumah Tangga Terpercaya',
  description: 'Temukan asisten rumah tangga, majikan, atau yayasan terpercaya dengan mudah.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
