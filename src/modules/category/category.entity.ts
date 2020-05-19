import * as mongoose from 'mongoose';

export type CategoryDocument = mongoose.Document & {
    title: string;
    displayTitle: string;
};

export const categorySchema = new mongoose.Schema({
    title: String,
    displayTitle: String,
}, { timestamps: true });

export const Category = mongoose.model<CategoryDocument>("Category", categorySchema);