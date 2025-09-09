'use client';

import { Provider } from 'react-redux';
import { store } from '@/store';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </Provider>
  );
}