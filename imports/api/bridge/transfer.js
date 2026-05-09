import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import crypto from 'crypto';

import { BridgeLedger } from './ledger';
import { verifyWalletOwnership } from './verify';
import { authenticateBridgeRequest } from './auth';

const generateReference = () => {
  return `BRIDGE-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
};

export const createBridgeTransfer = async ({
  senderId,
  receiverAddress,
  amount,
  currency = 'SKD',
  sourceApp = 'SKYDROP',
  destinationApp = 'PRIVATE_SKD',
  signature,
}) => {
  check(senderId, String);
  check(receiverAddress, String);
  check(amount, Number);

  if (amount <= 0) {
    throw new Meteor.Error('invalid-amount', 'Amount must be greater than zero');
  }

  const isVerified = await verifyWalletOwnership({
    senderId,
    signature,
  });

  if (!isVerified) {
    throw new Meteor.Error('verification-failed', 'Wallet verification failed');
  }

  const authenticated = authenticateBridgeRequest({
    senderId,
    sourceApp,
  });

  if (!authenticated) {
    throw new Meteor.Error('authentication-failed', 'Unauthorized request');
  }

  const reference = generateReference();

  const transfer = {
    reference,
    senderId,
    receiverAddress,
    amount,
    currency,
    sourceApp,
    destinationApp,
    status: 'PENDING',
    createdAt: new Date(),
  };

  const transferId = await BridgeLedger.insertAsync(transfer);

  await BridgeLedger.updateAsync(
    { _id: transferId },
    {
      $set: {
        status: 'COMPLETED',
        completedAt: new Date(),
      },
    }
  );

  return {
    success: true,
    transferId,
    reference,
    amount,
    currency,
    status: 'COMPLETED',
  };
};

Meteor.methods({
  async 'bridge.transfer'(payload) {
    return await createBridgeTransfer(payload);
  },
});
