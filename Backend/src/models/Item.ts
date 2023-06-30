import { Schema, model } from "mongoose";

interface IItem extends Document{ 
    itemID: string;
    itemName: string;
    itemPrice: number;
}

const ItemSchema = new Schema(
    {
        itemID:{
            type: String,
            required: true,
        },
        itemName:{
            type: String,
            required: true,
        },
        itemPrice:{
            type: Number,
            required: true,
        },
        itemDescription:{
            type: String,
            required: true
        }
});

export const Item = model<IItem>("Item", ItemSchema);

