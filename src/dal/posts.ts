import { postModel } from '../models';

export const getAllPosts = async () => await postModel.find();

export const createPost = async (title: string, sender: string, content?: string) =>
    await postModel.create({ title, sender, content });

export const editPost = async (id: string, title: string, sender: string, content?: string) =>
    await postModel.updateOne({ _id: id }, { title, sender, content });
