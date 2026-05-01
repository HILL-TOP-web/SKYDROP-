export const validateEmail = (email) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

export const validatePassword = (
  password
) => {
  return password.length >= 8;
};

export const validateWalletAddress = (
  address
) => {
  return address.startsWith('SKD-');
};

export const validateUsername = (
  username
) => {
  return username.length >= 3;
};
