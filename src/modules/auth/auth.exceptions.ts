import { NotFoundException } from "@nestjs/common";

export class AuthNotFoundException extends NotFoundException {
    constructor(data?: any) {
        super('USER_NOT_FOUND', "User not found");
    }
}

export class AuthFailException extends NotFoundException {
    constructor(data?: any) {
        super('AUTH_FAIL', "Authentication failed credentials are incorrect");
    }
}