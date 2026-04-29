import { Meteor } from 'meteor/meteor';
import { generateAIResponse } from '../services/aiService';

Meteor.methods({
  async 'ai.ask'(prompt) {
    check(prompt, String);

    if (!this.userId) {
      throw new Meteor.Error('NOT_AUTHORIZED');
    }

    const response = await generateAIResponse(prompt);

    return response;
  },
});
