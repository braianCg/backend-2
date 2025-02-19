import express from 'express';
import { create } from 'express-handlebars';
import { ProductsRouter } from '../routes/products.js';
import { CartRouter } from '../routes/cart.js';
import { config } from '../routes/index.js';
import logger from '../middlewares/logger.js';
import { WebSocketServer } from 'ws';

const initApp = () => {
    const app = express();

    // Config de hb
    const hbs = create({ extname: '.hbs' });
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    app.set('views', path.join(config.dirname, 'views'));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/', express.static(path.join(config.dirname, 'public')));
    app.use(logger);

    app.use('/api/products', ProductsRouter);
    app.use('/api/cart', CartRouter);

    console.log(config.dirname);
    return app;
};

const app = initApp();

//config de webS
const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    console.log('New client connected');
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

export default app;
