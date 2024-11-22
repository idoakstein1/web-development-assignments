import { Router } from 'express';
import { isValidObjectId } from 'mongoose';
import { createComment, deleteComment, getCommentsByPostID, getPostById } from '../dal';

export const commentRouter = Router();

commentRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
        res.status(400).send({ message: `id ${id} is not valid` });
        return;
    }
    const deletedComment = await deleteComment(id);
    res.status(200).send({ deletedComment });
});

commentRouter.get('/:postID', async (req, res) => {
    const postID = req.params.postID;
    if (!isValidObjectId(postID)) {
        res.status(400).send({ message: `Post id ${postID} is not valid` });
        return;
    }

    const comments = await getCommentsByPostID(postID);

    res.status(200).send({ comments });
});

commentRouter.post('/', async (req, res) => {
    const { sender, content, postID } = req.body;
    if (!sender || !postID) {
        res.status(400).send({ message: 'body param is missing (sender or postID)' });
        return;
    }
    if (!isValidObjectId(postID)) {
        res.status(400).send({ message: `invalid postID: ${postID}` });
        return;
    }
    if ((await getPostById(postID)) === null) {
        res.status(400).send({ message: `post with id: ${postID} doesn't exists` });
        return;
    }

    const comment = await createComment({ sender, content, postID });
    res.status(200).send(comment);
});
