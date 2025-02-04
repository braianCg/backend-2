import {Router} from 'express'

export const CartRouter = Router()

UsersRouter.get('/', (req, res) => {
    res.send({message: 'ok'})
})

UsersRouter.get('/:id', (req, res) => {
    res.send({message: {...req.params}})
})