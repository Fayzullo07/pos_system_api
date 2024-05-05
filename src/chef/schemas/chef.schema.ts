import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Chef {
    @Prop({ required: true })
    orders: [
        {
            photo: string,
            name: string,
            price: string
            category: string,
            count: string
        }
    ];

    @Prop({ required: true })
    orderNumber: string;

    @Prop({ default: false })
    isFinished: boolean;

    @Prop({ default: true })
    isActive: boolean;
}

export const ChefSchema = SchemaFactory.createForClass(Chef);