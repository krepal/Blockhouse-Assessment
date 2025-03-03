import { useCryptoStore } from '../store/statemanagement';

export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useCryptoStore();

  return (
    <input
      type="text"
      placeholder="Search cryptocurrencies..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded-md mb-4 text-white
      focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};