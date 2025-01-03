import { InferSchemaType, Schema, model } from 'mongoose';

const commentSchema = new Schema({
    postID: { type: Schema.Types.ObjectId, ref: 'posts', required: true },
    sender: { type: String, required: true },
    content: { type: String },
});

export const commentModel = model('comments', commentSchema);
export type Comment = InferSchemaType<typeof commentSchema>;
