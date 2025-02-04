import express from 'express'
import { ProductsRouter } from '../routes/products.js'
import { CartRouter } from '../routes/cart.js'
import { config } from '../routes/index.js'

const initApp = () => {
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded())
    app.use('/', express.static(config.dirname + 'public'))
    app.use(logger)

app.use('/api/products', ProductsRouter)
app.use('/api/cart', CartRouter)


    console.log(config.dirname)
    return app
}

export default initApp
