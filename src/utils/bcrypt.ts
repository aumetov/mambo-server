import * as bcrypt from 'bcrypt';

export const comparePasswords = (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};