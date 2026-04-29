import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Follows = new Mongo.Collection('follows');

Meteor.methods({
  async 'follow.user'(targetUserId) {
    check(targetUserId, String);

    if (!this.userId) {
      throw new Meteor.Error('NOT_AUTHORIZED');
    }

    const exists = await Follows.findOneAsync({
      followerId: this.userId,
      followingId: targetUserId,
    });

    if (exists) {
      throw new Meteor.Error('ALREADY_FOLLOWING');
    }

    await Follows.insertAsync({
      followerId: this.userId,
      followingId: targetUserId,
      createdAt: new Date(),
    });

    await Meteor.users.updateAsync(
      { _id: targetUserId },
      {
        $inc: {
          'profile.followers': 1,
        },
      }
    );

    await Meteor.users.updateAsync(
      { _id: this.userId },
      {
        $inc: {
          'profile.following': 1,
        },
      }
    );

    return true;
  },
});
