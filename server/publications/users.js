import { Meteor } from 'meteor/meteor';

Meteor.publish('users.basic', function () {
  if (!this.userId) {
    return this.ready();
  }

  return Meteor.users.find(
    {},
    {
      fields: {
        username: 1,
        profile: 1,
        createdAt: 1,
      },
    }
  );
});

Meteor.publish('users.single', function (userId) {
  check(userId, String);

  return Meteor.users.find(
    { _id: userId },
    {
      fields: {
        username: 1,
        profile: 1,
      },
    }
  );
});
