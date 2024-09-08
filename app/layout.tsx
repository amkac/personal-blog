import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/config/site';
import { Footer } from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.description,
  description: siteConfig.description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-background">
            <SiteHeader />
            <main className="flex-1"> {children} </main>
            <Footer />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
