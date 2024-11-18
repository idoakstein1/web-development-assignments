import { Router } from 'express';
import { getAllPosts } from '../dal';

export const postRouter = Router();

postRouter.get('/', async (_req, res) => {
    res.status(200).send(await getAllPosts());
});
