import { InferSchemaType, Schema, model } from 'mongoose';

const postSchema = new Schema({
    title: { type: String, required: true },
    sender: { type: String, required: true },
    content: { type: String },
});

export const postModel = model('posts', postSchema);
export type Post = InferSchemaType<typeof postSchema>;
