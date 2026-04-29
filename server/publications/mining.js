import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Mining = new Mongo.Collection('mining');

Meteor.publish('mining.user', function () {
  if (!this.userId) {
    return this.ready();
  }

  return Mining.find({
    userId: this.userId,
  });
});
