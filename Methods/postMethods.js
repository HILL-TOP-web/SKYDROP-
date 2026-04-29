import { Meteor } from 'meteor/meteor';
import { Posts } from '../publications/posts';

Meteor.methods({
  async 'posts.create'(data) {
    check(data, {
      text: String,
      image: String,
    });

    if (!this.userId) {
      throw new Meteor.Error('NOT_AUTHORIZED');
    }

    const user = await Meteor.users.findOneAsync(this.userId);

    const postId = await Posts.insertAsync({
      userId: this.userId,
      username: user.username,
      text: data.text,
      image: data.image,
      likes: 0,
      comments: [],
      createdAt: new Date(),
    });

    return {
      success: true,
      postId,
    };
  },

  async 'posts.like'(postId) {
    check(postId, String);

    await Posts.updateAsync(
      { _id: postId },
      {
        $inc: {
          likes: 1,
        },
      }
    );

    return true;
  },
});
