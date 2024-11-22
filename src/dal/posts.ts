import { FilterQuery } from 'mongoose';
import { Post, postModel } from '../models';

export const getAllPosts = async (query: Record<string, string | undefined>) => {
    const filters: FilterQuery<Post> = {};

    if ('sender' in query) {
        filters.sender = query.sender;
    }

    return await postModel.find(filters);
};

export const createPost = async (title: string, sender: string, content?: string) =>
    await postModel.create({ title, sender, content });

export const getPostById = async (id: string) => await postModel.findById(id);

export const editPost = async (id: string, title: string, sender: string, content?: string) =>
    await postModel.updateOne({ _id: id }, { title, sender, content });
