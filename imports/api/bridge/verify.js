import crypto from 'crypto';

export const verifyWalletOwnership = async ({
  senderId,
  signature,
}) => {
  if (!senderId || !signature) {
    return false;
  }

  const expectedSignature = crypto
    .createHash('sha256')
    .update(senderId + process.env.BRIDGE_SECRET)
    .digest('hex');

  return expectedSignature === signature;
};

export const verifyTransferIntegrity = ({ transfer }) => {
  if (!transfer) {
    return false;
  }

  if (!transfer.reference) {
    return false;
  }

  if (transfer.amount <= 0) {
    return false;
  }

  return true;
};
