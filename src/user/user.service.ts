import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) { }

    async findAll(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async create(user: User): Promise<User> {
        try {
            const res = await this.userModel.create(user);
            return res;

        } catch (error) {
            // if (error.name === 'ValidationError') {
            // Mongoose validation error
            throw new BadRequestException({
                message: 'Validation failed',
                errors: error,
            });
            // }
            // throw error; // Rethrow other errors
        }
    }

    async findById(id: string): Promise<User> {
        // if (id.length < 5) {
        //     throw new BadRequestException({
        //         message: 'Invalid ID length',
        //         details: 'The provided ID is too short.',
        //     });
        // }
        try {
            const user = await this.userModel.findById(id);
            return user;
        } catch (error) {
            throw new NotFoundException({
                message: 'User not found',
                details: `No user found with ID: ${id}`,
            });
        }
    }

    async updateById(id: string, user: User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true
        });
    }

    // async deleteById(id: string): Promise<User> {
    //     return await this.userModel.findByIdAndDelete(id);

    // }
}
