import { Meteor } from 'meteor/meteor';

export const isAdmin = async (userId) => {
  const user = await Meteor.users.findOneAsync(userId);

  return user?.profile?.role === 'admin';
};

export const requireAdmin = async (userId) => {
  const admin = await isAdmin(userId);

  if (!admin) {
    throw new Meteor.Error('ADMIN_ONLY');
  }
};
