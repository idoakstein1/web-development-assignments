import { commentModel } from '../models';

export const deleteComment = async (commentId: string) => await commentModel.deleteOne({ _id: commentId });

export const getCommentsByPostID = async (postID: string) => await commentModel.find({ postID }).select('-__v');
