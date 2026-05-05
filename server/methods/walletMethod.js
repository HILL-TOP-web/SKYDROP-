import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  /**
   * Wallet Balance
   */
  async 'wallet.getBalance'() {
    if (!this.userId) {
      throw new Meteor.Error(
        'not-authorized',
        'You must be logged in.'
      );
    }

    return {
      success: true,
      message: 'Wallet loaded successfully.',
      balance: {
        skd: 0,
        usd: 0,
        ngn: 0,
      },
    };
  },

  /**
   * Send SKD
   */
  async 'wallet.sendSKD'(data) {
    check(data, Object);

    throw new Meteor.Error(
      'trading-disabled',
      'TRADING STARTS ON THE 1st OF JANUARY 2027 AT 10:00 AM'
    );
  },

  /**
   * Swap SKD to USDT
   */
  async 'wallet.swapSKDToUSDT'(data) {
    check(data, Object);

    throw new Meteor.Error(
      'trading-disabled',
      'TRADING STARTS ON THE 1st OF JANUARY 2027 AT 10:00 AM'
    );
  },

  /**
   * Withdraw Funds
   */
  async 'wallet.withdraw'(data) {
    check(data, Object);

    throw new Meteor.Error(
      'trading-disabled',
      'TRADING STARTS ON THE 1st OF JANUARY 2027 AT 10:00 AM'
    );
  },

  /**
   * Deposit Funds
   */
  async 'wallet.deposit'(data) {
    check(data, Object);

    throw new Meteor.Error(
      'trading-disabled',
      'TRADING STARTS ON THE 1st OF JANUARY 2027 AT 10:00 AM'
    );
  },

  /**
   * Transaction History
   */
  async 'wallet.getTransactions'() {
    if (!this.userId) {
      throw new Meteor.Error(
        'not-authorized',
        'You must be logged in.'
      );
    }

    return {
      success: true,
      transactions: [],
      message:
        'TRADING STARTS ON THE 1st OF JANUARY 2027 AT 10:00 AM',
    };
  },
});
