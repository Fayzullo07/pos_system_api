import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return {
            signup: "Signup"
        }
    }

    signin() {
        return {
            signin: "Signin"
        }
    }
}