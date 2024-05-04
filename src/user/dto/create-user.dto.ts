import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'Firstname cannot be empty' })
    @IsString()
    readonly firstname: string;
    readonly lastname: string;
    readonly phone: string;
    readonly birthday: Date;
    readonly gender: string;
    readonly photo: string;
}