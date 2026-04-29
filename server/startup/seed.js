import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(async () => {
  const admin = await Meteor.users.findOneAsync({
    username: 'admin',
  });

  if (!admin) {
    Accounts.createUser({
      username: 'admin',
      email: 'admin@skydrop.com',
      password: 'Admin123@',
      profile: {
        role: 'admin',
        verified: true,
      },
    });

    console.log('✅ Default admin created');
  }
});
