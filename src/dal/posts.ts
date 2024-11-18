import { postModel } from '../models';

export const createPost = async (title: string, sender: string, content?: string) =>
    postModel.create({ title, sender, content });
