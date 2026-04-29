import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import bcrypt from 'bcrypt';

Meteor.methods({
  async 'auth.register'(data) {
    check(data, {
      username: String,
      email: String,
      password: String,
    });

    const exists = await Meteor.users.findOneAsync({
      email: data.email,
    });

    if (exists) {
      throw new Meteor.Error('EMAIL_EXISTS');
    }

    const userId = Accounts.createUser({
      username: data.username,
      email: data.email,
      password: data.password,
      profile: {
        skdBalance: 0,
        verified: false,
        followers: 0,
        following: 0,
      },
    });

    return {
      success: true,
      userId,
    };
  },
});
