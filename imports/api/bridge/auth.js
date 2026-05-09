import crypto from 'crypto';

const allowedApps = ['SKYDROP', 'PRIVATE_SKD'];

export const authenticateBridgeRequest = ({
  senderId,
  sourceApp,
}) => {
  if (!senderId || !sourceApp) {
    return false;
  }

  if (!allowedApps.includes(sourceApp)) {
    return false;
  }

  return true;
};

export const generateBridgeToken = ({
  userId,
  appName,
}) => {
  const token = crypto
    .createHash('sha256')
    .update(`${userId}-${appName}-${Date.now()}`)
    .digest('hex');

  return {
    token,
    appName,
    createdAt: new Date(),
  };
};

export const validateBridgeToken = ({ token }) => {
  if (!token) {
    return false;
  }

  return token.length >= 32;
};
