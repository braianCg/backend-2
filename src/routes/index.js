import { ProductsRouter } from './products.js';
import { CartRouter } from './cart.js';
import { config } from '../config/index.js';
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Hola hanblebars', message: 'Este es mi primer template.' });
});

export default router; export{ ProductsRouter, CartRouter, config };