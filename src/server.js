import initApp from './app/index.js';

const app = initApp();

const server = app.listen(8080, () => {
    console.log('Server is running on port 8080');
})
