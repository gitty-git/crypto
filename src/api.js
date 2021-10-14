const API_KEY = "50f1967255f4cdb33a0366a10a08ae066a129cce06e235f69f3d2ed3c2e9cd6b"

export const loadTicker = (tickers) =>
    fetch(`https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(',')}&api_key=${API_KEY}`)
    .then(r => r.json())
    .then(rawData => 
        Object.fromEntries(
            Object.entries(rawData).map(([key, value]) => [key, 1 / value])
            )
        )