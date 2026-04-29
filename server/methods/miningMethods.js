import { Meteor } from 'meteor/meteor';
import { Mining } from '../publications/mining';
import { Wallets } from '../publications/wallet';

const MINING_RATE = 0.0001;

Meteor.methods({
  async 'mining.start'() {
    if (!this.userId) {
      throw new Meteor.Error('NOT_AUTHORIZED');
    }

    const exists = await Mining.findOneAsync({
      userId: this.userId,
    });

    if (exists) {
      throw new Meteor.Error('ALREADY_MINING');
    }

    await Mining.insertAsync({
      userId: this.userId,
      startedAt: new Date(),
      miningRate: MINING_RATE,
      active: true,
    });

    return true;
  },

  async 'mining.claim'() {
    if (!this.userId) {
      throw new Meteor.Error('NOT_AUTHORIZED');
    }

    const mining = await Mining.findOneAsync({
      userId: this.userId,
    });

    if (!mining) {
      throw new Meteor.Error('MINING_NOT_FOUND');
    }

    const now = Date.now();
    const started = new Date(mining.startedAt).getTime();

    const seconds = Math.floor((now - started) / 1000);

    const minedAmount = seconds * MINING_RATE;

    await Wallets.updateAsync(
      {
        userId: this.userId,
      },
      {
        $inc: {
          skd: minedAmount,
        },
      },
      {
        upsert: true,
      }
    );

    await Mining.removeAsync({
      _id: mining._id,
    });

    return {
      success: true,
      minedAmount,
    };
  },
});
