import { Mongo } from 'meteor/mongo';

export const BridgeLedger = new Mongo.Collection('bridge_ledger');

BridgeLedger.allow({
  insert() {
    return false;
  },
  update() {
    return false;
  },
  remove() {
    return false;
  },
});

export const getBridgeTransactionByReference = async (reference) => {
  return await BridgeLedger.findOneAsync({ reference });
};

export const getUserBridgeTransactions = async (userId) => {
  return await BridgeLedger
    .find(
      {
        senderId: userId,
      },
      {
        sort: {
          createdAt: -1,
        },
      }
    )
    .fetchAsync();
};

export const updateBridgeStatus = async ({
  reference,
  status,
}) => {
  return await BridgeLedger.updateAsync(
    { reference },
    {
      $set: {
        status,
        updatedAt: new Date(),
      },
    }
  );
};
