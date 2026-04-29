import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Wallets = new Mongo.Collection('wallets');

Meteor.publish('wallet.user', function () {
  if (!this.userId) {
    return this.ready();
  }

  return Wallets.find({
    userId: this.userId,
  });
});
