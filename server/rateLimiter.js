import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';

DDPRateLimiter.addRule(
  {
    userId() {
      return true;
    },

    type: 'method',

    name() {
      return true;
    },
  },
  10,
  1000
);

console.log('🛡️ Rate limiter enabled');
