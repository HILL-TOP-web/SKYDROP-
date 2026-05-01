import crypto from 'crypto';

export const generateWalletAddress = () => {
  return (
    'SKD-' +
    crypto.randomBytes(20).toString('hex')
  );
};

export const formatCurrency = (amount) => {
  return Number(amount).toLocaleString();
};

export const generateReferralCode = (
  username
) => {
  return (
    username.toUpperCase() +
    '-' +
    Math.floor(Math.random() * 99999)
  );
};

export const calculateMiningReward = (
  power,
  seconds
) => {
  const baseRate = 0.0001;

  return power * seconds * baseRate;
};
