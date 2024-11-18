import { Router } from 'express';
import { createPost, getAllPosts, getPostById } from '../dal';
import { isValidObjectId } from 'mongoose';

export const postRouter = Router();

postRouter.get('/', async (_req, res) => {
    res.status(200).send(await getAllPosts());
});

postRouter.post('/', async (req, res) => {
    const { sender, content, title } = req.body;
    if (!sender || !title) {
        res.status(400).send({ message: 'body param is missing (sender or title)' });
        return;
    }
    const post = await createPost(title, sender, content);
    res.status(200).send(post);
});

postRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        res.status(400).send({ message: `id: ${id} is not valid` });
        return;
    }

    const post = await getPostById(id);
    if (!post) {
        res.status(404).send({ message: `didn't find post with id: ${id}` });
        return;
    }

    res.status(200).send(post);
});
