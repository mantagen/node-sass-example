'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  port: 3000
});

server.start((err) => {

  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.file('./public/index.html');
    }
  });

  server.route({
    method: 'GET',
    path: '/css/main.css',
    handler: function(request, reply) {
      reply.file('./public/css/main.css');
    }
  });
});
