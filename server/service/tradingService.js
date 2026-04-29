export const calculateSKDPrice = async () => {
  return {
    skdPriceUSD: 2000,
    skdPriceNGN: 3000,
  };
};

export const convertSKD = async (amount, currency) => {
  const rates = await calculateSKDPrice();

  if (currency === 'USD') {
    return amount * rates.skdPriceUSD;
  }

  if (currency === 'NGN') {
    return amount * rates.skdPriceNGN;
  }

  return 0;
};
