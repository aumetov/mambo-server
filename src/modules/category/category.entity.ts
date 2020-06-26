import * as mongoose from 'mongoose';

export type CategoryDocument = mongoose.Document & {
    title: string;
    parent: string;
    displayTitle: string;
};

export const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        required: true
    },
    displayTitle: {
        type: String,
        required: true
    },
}, { timestamps: true });

export const Category = mongoose.model<CategoryDocument>("Category", categorySchema);