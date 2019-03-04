import parsingPipe from './controllers/parsingController'

const routing = {
  name: 'routing',
  version: '1.0.0',
  async register(server) {
    server.route({
      method: 'GET',
      path: '/{user?}',
      handler: (request, h) => parsingPipe(h, request.params.user),
    })
  },
}
module.exports = routing
