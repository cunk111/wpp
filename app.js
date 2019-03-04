import hapi from 'hapi'
import routes from './routing'

const server = hapi.server({
  port: 3000,
  host: 'localhost',
})

const init = async () => {
  await server.start()
  await server.register(routes)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
