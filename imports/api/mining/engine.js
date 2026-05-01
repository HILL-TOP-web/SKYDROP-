import { Meteor } from 'meteor/meteor';
import { Users } from '../users/collection';
import { Mining } from './collection';

const MINING_RATE = 0.0001;
const MINING_COOLDOWN = 60;

Meteor.methods({
  'mining.start'() {
    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    }

    const user = Users.findOne(this.userId);

    if (!user) {
      throw new Meteor.Error('User not found');
    }

    const existingSession = Mining.findOne({
      userId: this.userId,
      active: true,
    });

    if (existingSession) {
      throw new Meteor.Error('Mining already active');
    }

    Mining.insert({
      userId: this.userId,
      startedAt: new Date(),
      active: true,
      minedAmount: 0,
    });

    return {
      success: true,
      message: 'Mining started',
    };
  },

  'mining.claim'() {
    if (!this.userId) {
      throw new Meteor.Error('Not authorized');
    }

    const session = Mining.findOne({
      userId: this.userId,
      active: true,
    });

    if (!session) {
      throw new Meteor.Error('No active mining session');
    }

    const now = new Date();
    const seconds = Math.floor(
      (now - session.startedAt) / 1000
    );

    if (seconds < MINING_COOLDOWN) {
      throw new Meteor.Error(
        'Cooldown active'
      );
    }

    const mined = seconds * MINING_RATE;

    Users.update(this.userId, {
      $inc: {
        balanceSKD: mined,
      },

      $set: {
        lastMiningTime: new Date(),
      },
    });

    Mining.update(session._id, {
      $set: {
        active: false,
        endedAt: new Date(),
        minedAmount: mined,
      },
    });

    return {
      success: true,
      mined,
    };
  },
});
