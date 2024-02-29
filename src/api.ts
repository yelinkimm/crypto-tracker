const BASE_URL = "https://api.coinpaprika.com/v1";
const BASE_URL_DEV = "https://ohlcv-api.nomadcoders.workers.dev";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((respone) => respone.json());
}
export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((respone) => respone.json());
}
export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((respone) => respone.json());
}

export function fetchCoinHistory(coinId: string) {
  return fetch(
    `${BASE_URL_DEV}?coinId=${coinId}`
  ).then((response) => response.json());
}