import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import './globals.css';

import { ModalProvider } from '~/components/providers/modal-provider';
import { QueryProvider } from '~/components/providers/query-provider';
import { SocketProvider } from '~/components/providers/socket-provider';
import { ThemeProvider } from '~/components/providers/theme-provider';
import { cn } from '~/lib/utils';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Discord',
  description: 'A Discord web application',
  icons: [
    {
      rel: 'icon',
      type: 'image/gif',
      sizes: '32x32',
      url: '/icon.svg',
    },
    {
      rel: 'icon',
      type: 'image/gif',
      sizes: '64x64',
      url: '/icon64x64.png',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={cn(font.className, 'bg-white dark:bg-[#313338]')}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='discord-theme'
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
