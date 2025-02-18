import { Router } from 'express';

export const CartRouter = Router();

CartRouter.get('/', (req, res) => {
    res.send('Cart route');
});