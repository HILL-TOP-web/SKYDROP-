// 📁 imports/api/config.js

export const CONFIG = {
  APP: {
    NAME: 'SKYDROP',
    VERSION: '1.0.0',
    DESCRIPTION: 'SKYDROP Mining and Social Platform',
  },

  TOKEN: {
    NAME: 'SkyCoin',
    SYMBOL: 'SKD',
    TOTAL_SUPPLY: 21000000,
    DECIMALS: 18,
  },

  MINING: {
    ENABLED: true,
    RATE_PER_SECOND: 0.0001,
    MAX_SESSION_HOURS: 24,
    REFERRAL_BONUS: 0.05,
    AUTO_CLAIM: false,
  },

  WALLET: {
    ENABLED: true,
    MIN_TRANSFER: 0.001,
    MAX_TRANSFER: 100000,
    TRANSFER_FEE_PERCENT: 1,
    DAILY_TRANSFER_LIMIT: 1000000,
  },

  SECURITY: {
    MAX_LOGIN_ATTEMPTS: 5,
    LOCK_TIME_MINUTES: 15,
    JWT_EXPIRES_IN: '7d',
    REQUIRE_EMAIL_VERIFICATION: false,
  },

  STORAGE: {
    MAX_FILE_SIZE_MB: 20,

    ALLOWED_FILE_TYPES: [
      'image/png',
      'image/jpeg',
      'image/webp',
      'video/mp4',
    ],

    UPLOAD_PATH: '/uploads',
  },

  POSTS: {
    MAX_POST_LENGTH: 1000,
    MAX_COMMENT_LENGTH: 300,
    MAX_MEDIA_PER_POST: 4,
  },

  SOCIAL: {
    FOLLOW_ENABLED: true,
    LIKE_ENABLED: true,
    COMMENT_ENABLED: true,
    SHARE_ENABLED: true,
  },

  AI: {
    ENABLED: true,
    MAX_PROMPT_LENGTH: 2000,
    DAILY_REQUEST_LIMIT: 100,
  },

  NOTIFICATIONS: {
    PUSH_ENABLED: true,
    EMAIL_ENABLED: false,
    SMS_ENABLED: false,
  },

  API: {
    VERSION: 'v1',
    BASE_URL: '/api/v1',
    REQUEST_TIMEOUT_MS: 30000,
  },

  DATABASE: {
    DEFAULT_PAGE_SIZE: 20,
    MAX_PAGE_SIZE: 100,
  },

  FEATURES: {
    MINING_ENABLED: true,
    WALLET_ENABLED: true,
    SOCIAL_FEED_ENABLED: true,
    CHAT_ENABLED: false,
    VIDEO_CALL_ENABLED: false,
    NFT_ENABLED: false,
    STAKING_ENABLED: false,
  },

  ADS: {
    ENABLED: true,
    REWARD_PER_AD_VIEW: 0.00001,
    MAX_DAILY_ADS: 200,
  },
};
