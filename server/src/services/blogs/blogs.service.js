// Initializes the `blogs` service on path `/api/v1/blogs`
const createService = require('feathers-mongoose');
const createModel = require('../../models/blogs.model');
const hooks = require('./blogs.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api/v1/blogs', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/v1/blogs');

  service.hooks(hooks);
};
