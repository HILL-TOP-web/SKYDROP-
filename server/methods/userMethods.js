import { Meteor } from 'meteor/meteor';

Meteor.methods({
  async 'user.updateProfile'(data) {
    check(data, {
      bio: String,
      avatar: String,
    });

    if (!this.userId) {
      throw new Meteor.Error('NOT_AUTHORIZED');
    }

    await Meteor.users.updateAsync(
      { _id: this.userId },
      {
        $set: {
          'profile.bio': data.bio,
          'profile.avatar': data.avatar,
        },
      }
    );

    return {
      success: true,
    };
  },
});
