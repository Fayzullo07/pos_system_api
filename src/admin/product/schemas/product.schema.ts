import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Product {
    @Prop({ required: true })
    photo: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: string;

    @Prop({ required: true })
    category: string;

    @Prop({ default: true })
    isActive: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);