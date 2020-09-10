const redis = require('redis');

const getRedisClient = function () {
  if (process.env.REDIS_URL) {
    return redis.createClient(process.env.REDIS_URL);
  } else {
    return redis.createClient();
  }
};

module.exports = { getRedisClient };
