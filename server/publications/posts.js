import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');

Meteor.publish('posts.all', function () {
  return Posts.find(
    {},
    {
      sort: {
        createdAt: -1,
      },
      limit: 100,
    }
  );
});
