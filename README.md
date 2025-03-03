# Blockhouse-Assessment

## Project Overview
This project is a Crypto Price Tracker built with Next.js that displays real-time cryptocurrency prices using the CoinGecko API.

## Project Structure
- `/web-app` - Next.js Crypto Price Tracker application
- `/docs` - Project documentation using Docusaurus

## Prerequisites
- Node.js 18 or higher
- npm or yarn

## Setup Instructions

### Web Application

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the web app directory**:
    ```bash
    cd web-app
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. **Visit the application**:
    Open your Incognito browser and go to `http://localhost:3000`

### Documentation

1. **Navigate to the docs directory**:
    ```bash
    cd ../docs
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the documentation server**:
    ```bash
    npm start
    ```

4. **Visit the documentation site**:
    Open your browser and go to `http://localhost:3001`

## API Integration Details
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