import { Router } from 'express'
import fs from 'fs'
import path, { dirname } from 'path'
import { config } from '../config/index.js'

export const ProductsRouter = Router()

config.dirname
console.log(config.dirname)

const pathToProducts = path.join(config.dirname, '/src/data/products.json')

console.log(pathToProducts)

ProductsRouter.get('/', async (req, res) => {

    let productsString = await fs.promises.readFile(pathToProducts, 'utf-8')
    const products = JSON.parse(productsString)
    res.send({ products })
})

ProductsRouter.post('/', async (req, res) => {
    let productsString = await fs.promises.readFile(pathToProducts, 'utf-8')
    const products = JSON.parse(productsString)
})