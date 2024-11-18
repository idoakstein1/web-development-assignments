import { postModel } from '../models';

export const getAllPosts = async () => await postModel.find();

export const createPost = async (title: string, sender: string, content?: string) =>
    postModel.create({ title, sender, content });
