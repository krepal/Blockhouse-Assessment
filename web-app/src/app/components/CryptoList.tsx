import { useQuery } from '@tanstack/react-query';
import { geckoApi } from '../services/GeckoApi';
import { LoadingSpinner } from './LoadingSpinner';
import { useCryptoStore } from '../store/StateManagement';

export const CryptoList = () => {
  const { searchTerm } = useCryptoStore();

  const { data: cryptos, isLoading, refetch } = useQuery({
    queryKey: ['cryptos'],
    queryFn: geckoApi,
  });

  if (isLoading) return <LoadingSpinner />;

  const filteredCryptos = cryptos?.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:shadow-lg transition-shadow"
      >
        Refresh
      </button>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredCryptos?.map((crypto) => (
          <div
            key={crypto.id}
            className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all bg-white relative overflow-hidden"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
            }}
          >
            <div className="flex items-center gap-2">
              <img src={crypto.image} className="w-7 h-7" alt={crypto.name} />
              <h2 className="font-bold">{crypto.name}</h2>
              <span className="text-gray-500">({crypto.name.toUpperCase()})</span>
            </div>
            <p className="mt-2 text-lg font-medium">${crypto.current_price.toFixed(2)}</p>
            <p
              className={`${
                crypto.price_change_percentage_24h > 0
                  ? 'text-green-500'
                  : 'text-red-500'
              } font-medium`}
            >
              {crypto.price_change_percentage_24h > 0 ? '↑' : '↓'} {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
            </p>
            <div
              className="absolute inset-x-0 bottom-0 h-1"
              style={{
                background: crypto.price_change_percentage_24h > 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};