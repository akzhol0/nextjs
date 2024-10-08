import './globals.css';
import { Fugaz_One } from 'next/font/google';

export const metadata = {
  title: 'Next App Test',
  description: 'Next App Learning',
};

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-full flex flex-col'}>
        <header className="p-4 sm:p-8 flex items-start justify-between gap-4">
          <h1 className={'text-base sm:text-lg text-gradient ' + fugaz.className}>Title of the Application</h1>
        </header>
        {children}
        <footer className="p-4 sm:p-8">footer</footer>
      </body>
    </html>
  );
}
