const path = require('path');

module.exports = {
  basePath: '', // see: https://nextjs.org/docs/api-reference/next.config.js/basepath
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
