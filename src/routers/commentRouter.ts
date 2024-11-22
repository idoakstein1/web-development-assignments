import { Router } from 'express';
import { deleteComment, getCommentsByPostID } from '../dal';
import { isValidObjectId } from 'mongoose';

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
