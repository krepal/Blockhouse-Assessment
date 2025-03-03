---
sidebar_position: 3
---

# API Integration

## CoinGecko API Integration
I used the CoinGecko API to fetch real-time cryptocurrency data. The integration is handled through a dedicated service:

```typescript
const GECKO_API = 'https://api.coingecko.com/api/v3';

export const geckoApi = async (): Promise<CryptoTypes[]> => {
  const response = await axios.get(`${GECKO_API}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: 5,
      page: 1,
      sparkline: false,
    },
  });
  return response.data;
};
```