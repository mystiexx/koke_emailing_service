const AppServer = require('./util/appServer');
const apiRoutes = require('./routes/api');

const server = new AppServer({
  routes: {
    api: apiRoutes,
  },
});

server.serve();
