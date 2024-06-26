import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Category {
    @Prop({ required: true })
    name: string;

    @Prop({ default: true })
    isActive: boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);