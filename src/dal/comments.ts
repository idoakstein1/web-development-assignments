import { commentModel } from '../models';

export const deleteComment = async (commentId: string) => await commentModel.deleteOne({ _id: commentId });
