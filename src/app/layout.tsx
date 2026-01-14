import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ildar - AnmiTaliDev',
  description: 'Portfolio of Ildar - Developer, Psychology Student, Cartographer from Kazakhstan',
  keywords: ['Ildar', 'AnmiTaliDev', 'Developer', 'ArchLinux', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
