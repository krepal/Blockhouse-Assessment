import { create } from 'zustand';
import { CryptoTypes } from '../types/CryptoTypes';

interface CryptoStore {
  cryptos: CryptoTypes[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setSearchPrice: (price: number) => void;
  setCryptos: (cryptos: CryptoTypes[]) => void;
}

export const useCryptoStore = create<CryptoStore>((set) => ({
  cryptos: [],
  searchTerm: '',
  setSearchTerm: (term ) => set({ searchTerm: term }),
  setSearchPrice: (price) => set({ searchTerm: price.toString() }),
  setCryptos: (cryptos) => set({ cryptos }),
}));