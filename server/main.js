import '/server/startup';
import '/server/publications/users';
import '/server/publications/posts';
import '/server/publications/mining';
import '/server/publications/wallet';

import '/server/methods/authMethods';
import '/server/methods/userMethods';
import '/server/methods/postMethods';
import '/server/methods/followMethods';
import '/server/methods/miningMethods';
import '/server/methods/walletMethods';
import '/server/methods/aiMethods';

import '/server/security/rateLimiter';
import '/server/security/permissions';

Meteor.startup(() => {
  console.log('🚀 SKYDROP SERVER STARTED');
});
