import { Router } from 'express';
import { createPost } from '../dal';

export const postRouter = Router();

postRouter.post('/', async (req, res) => {
    const { sender, content, title } = req.body;
    if (!sender || !title) {
        res.status(400).send({ message: 'body param is missing (sender or title)' });
        return;
    }
    const post = await createPost(title, sender, content);
    res.status(200).send(post);
});
