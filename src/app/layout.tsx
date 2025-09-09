import './globals.css';
import ClientProviders from './ClientProviders';

export const metadata = {
  title: 'EduPress',
  description: 'Develop your skills with online courses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}