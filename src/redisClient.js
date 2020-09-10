const redis = require('redis');

const getRedisClient = function () {
  console.log(process.env.REDISCLOUD_URL, process.env.REDIS_URL, '>>>>>>>>>');
  if (process.env.REDISCLOUD_URL) {
    console.log('In redis cloud');
    return redis.createClient(process.env.REDISCLOUD_URL, {
      no_ready_check: true,
    });
  } else {
    return redis.createClient();
  }
};
module.exports = { getRedisClient };
