import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { config } from '../config/index.js';
import { v4 as uuidv4 } from 'uuid';
import { validtaeInputProducts } from '../middlewares/validationMiddleware.js';

export const ProductsRouter = Router();

const pathToProducts = path.join(config.dirname, '/src/data/products.json');

ProductsRouter.get('/', async (req, res) => {
    try {
        let productsString = await fs.promises.readFile(pathToProducts, 'utf-8');
        const products = JSON.parse(productsString);
        res.send({ products });
    } catch (error) {
        res.status(500).send({ error: 'Error reading products file' });
    }
});

ProductsRouter.post('/', validtaeInputProducts, async (req, res) => {
    try {
        let productsString = await fs.promises.readFile(pathToProducts, 'utf-8');
        const products = JSON.parse(productsString);

        const id = uuidv4();

        const { 
            title,
            description,
            code, 
            price, 
            status, 
            stock, 
            category, 
            thumbnails 
        } = req.body;

        const product = {
            id,
            title,
            description,
            code,
            price,
            status,
            stock,
            category,
            thumbnails,
        };

        products.push(product);

        const productStringified = JSON.stringify(products, null, '\t');
        await fs.promises.writeFile(pathToProducts, productStringified);
        res.send({ message: "producto creado", data: product });
    } catch (error) {
        res.status(500).send({ error: 'Error writing to products file' });
    }
});