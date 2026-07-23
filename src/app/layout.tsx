import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AnmiTaliDev :: BIOS Setup Utility',
  description: 'Personal page of Hm (AnmiTaliDev), developer from Kazakhstan, presented as a BIOS setup utility',
  keywords: ['AnmiTaliDev', 'Developer', 'ArchLinux', 'NurOS', 'bedrockRTOS', 'Portfolio'],
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
