import { Meteor } from 'meteor/meteor';
import { Wallets } from '../publications/wallet';

Meteor.methods({
  async 'wallet.balance'() {
    if (!this.userId) {
      throw new Meteor.Error('NOT_AUTHORIZED');
    }

    const wallet = await Wallets.findOneAsync({
      userId: this.userId,
    });

    return wallet || {
      skd: 0,
      usd: 0,
      ngn: 0,
    };
  },

  async 'wallet.transfer'(data) {
    check(data, {
      receiverId: String,
      amount: Number,
    });

    if (!this.userId) {
      throw new Meteor.Error('NOT_AUTHORIZED');
    }

    const senderWallet = await Wallets.findOneAsync({
      userId: this.userId,
    });

    if (!senderWallet || senderWallet.skd < data.amount) {
      throw new Meteor.Error('INSUFFICIENT_BALANCE');
    }

    await Wallets.updateAsync(
      { userId: this.userId },
      {
        $inc: {
          skd: -data.amount,
        },
      }
    );

    await Wallets.updateAsync(
      { userId: data.receiverId },
      {
        $inc: {
          skd: data.amount,
        },
      },
      {
        upsert: true,
      }
    );

    return {
      success: true,
    };
  },
});
