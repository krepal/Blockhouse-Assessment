export interface CryptoTypes {
    id: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    image: string;
  }
  
  export interface CryptoListTypes {
    data: CryptoTypes[];
  }