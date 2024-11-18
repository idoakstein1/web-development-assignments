import { postModel } from '../models';

export const getAllPosts = async () => await postModel.find();
