import * as mongoose from 'mongoose';

export type UserDocument = mongoose.Document & {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
};

export const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model<UserDocument>("User", userSchema);