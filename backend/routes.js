const { checkDatabaseHandler, registerUserHandler, loginUserHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/api/check-db',
    handler: checkDatabaseHandler,
  },
  {
    method: 'POST',
    path: '/api/register',
    handler: registerUserHandler,
  },
  {
    method: 'POST',
    path: '/api/login',
    handler: loginUserHandler,
  },
];

module.exports = routes;
