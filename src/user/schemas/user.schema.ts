import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class User {
    @Prop({ required: true })
    firstname: string;

    @Prop({ required: true })
    lastname: string;

    @Prop({ required: true, unique: true })
    phone: string;

    @Prop()
    birthday: Date;

    @Prop()
    gender: string;

    @Prop()
    photo: string;

}

export const UserSchema = SchemaFactory.createForClass(User);