import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Users = new Mongo.Collection('users');

if (Meteor.isServer) {
  Meteor.publish('users.all', function () {
    return Users.find({}, {
      fields: {
        password: 0,
        secretKey: 0,
      },
    });
  });

  Meteor.publish('users.single', function (userId) {
    check(userId, String);

    return Users.find({ _id: userId }, {
      fields: {
        password: 0,
        secretKey: 0,
      },
    });
  });
}
