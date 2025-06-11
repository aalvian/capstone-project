const Hapi = require('@hapi/hapi');
const routes = require('./routes');
require('dotenv').config(); // Biar bisa pakai .env (lokal)

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000, // Railway otomatis isi process.env.PORT
    host: '0.0.0.0', // WAJIB untuk Railway
    routes: {
      cors: {
        origin: ['*'], // Allow all (boleh diubah untuk keamanan)
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log('Server berjalan pada', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
