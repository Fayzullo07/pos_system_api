import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class OrderNumber {
    @Prop({ required: true })
    orderNumber: string;

    @Prop({ default: false })
    isFinished: boolean;

    @Prop({ default: true })
    isActive: boolean;
}

export const OrderNumberSchema = SchemaFactory.createForClass(OrderNumber);