export const validtaeInputProducts = (req, res, next) => {
    const { title, description, code, price, status, stock, category, thumbnails } = req.body;
    if (!title || !description || !code || !price || !status || !stock || !category || !thumbnails) {
        return res.status(400).json({ message: 'Faltan datos' });
    }
    next();
    
    console.log('entrada del middleware de validacion');
}