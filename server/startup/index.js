import './seed';

Meteor.startup(async () => {
  console.log('⚡ Initializing SKYDROP startup process...');

  process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION:', err);
  });

  process.on('unhandledRejection', (err) => {
    console.error('UNHANDLED REJECTION:', err);
  });
});
