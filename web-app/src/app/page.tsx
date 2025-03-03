'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { CryptoList } from './components/CryptoList';
import { SearchBar } from './components/SearchBar';
const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl text-white
         font-bold mb-4">Crypto Price Tracker</h1>
        <SearchBar />
        <CryptoList />
      </main>
    </QueryClientProvider>
  );
}