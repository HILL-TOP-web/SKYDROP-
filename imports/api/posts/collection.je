import SimpleSchema from 'simpl-schema';

export const PostSchema = new SimpleSchema({
  userId: {
    type: String,
  },

  username: {
    type: String,
  },

  content: {
    type: String,
    max: 2000,
  },

  image: {
    type: String,
    optional: true,
  },

  likes: {
    type: Number,
    defaultValue: 0,
  },

  comments: {
    type: Number,
    defaultValue: 0,
  },

  shares: {
    type: Number,
    defaultValue: 0,
  },

  createdAt: {
    type: Date,
  },
});
