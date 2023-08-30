const app = require('./app')
const config = require('./config')()


function bootstrap() {
    const port = config.app.port
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
}

bootstrap()