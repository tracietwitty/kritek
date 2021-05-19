// figures out which set of credentials to return (dev vs prod):
if (process.env.NODE_ENV === 'production') {
  // returns the prod keys
  module.exports = require('./prod');
} else {
  // returns dev keys
  module.exports = require('./dev');
}
