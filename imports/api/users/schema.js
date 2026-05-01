import SimpleSchema from 'simpl-schema';

export const UserSchema = new SimpleSchema({
  username: {
    type: String,
    min: 3,
    max: 20,
  },

  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },

  profilePicture: {
    type: String,
    optional: true,
  },

  bio: {
    type: String,
    optional: true,
    max: 300,
  },

  walletAddress: {
    type: String,
  },

  balanceSKD: {
    type: Number,
    defaultValue: 0,
  },

  balanceUSD: {
    type: Number,
    defaultValue: 0,
  },

  miningPower: {
    type: Number,
    defaultValue: 1,
  },

  referrals: {
    type: Array,
    defaultValue: [],
  },

  'referrals.$': {
    type: String,
  },

  createdAt: {
    type: Date,
  },

  lastMiningTime: {
    type: Date,
    optional: true,
  },

  banned: {
    type: Boolean,
    defaultValue: false,
  },
});
