import { Router } from 'express';
import { createPost, editPost, getAllPosts } from '../dal';

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

postRouter.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { sender, content, title } = req.body;
    if (!id) {
        res.status(400).send({ message: 'query param is missing (id)' });
    }

    const updatedPost = await editPost(id, title, sender, content);
    res.status(200).send(updatedPost);
});
