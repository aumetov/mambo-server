import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SALT_WORK_FACTOR } from '../../consts/bcrypt-salt';

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

userSchema.pre<UserDocument>('save', function(next) {
    const user = this
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.checkPassword = (attempt, callback) => {
    bcrypt.compare(attempt, this.user.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    })
}

export const User = mongoose.model<UserDocument>("User", userSchema);