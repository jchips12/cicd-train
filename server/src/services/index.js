const blogs = require('./blogs/blogs.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(blogs);
};
