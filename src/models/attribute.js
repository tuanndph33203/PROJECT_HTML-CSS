import mongoose, { Schema } from "mongoose";

const AttributeSchema = new Schema(
    {
        name: {
            type: String,
            unum: ['Color', 'Size'],
            default : 'Color'
        },
        values: [
            {
                nameValue: {
                    type: String,
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                stock: {
                    type: Number,
                    required: true,
                },
            },
        ],
    },
    { timestamps: false, versionKey: false }
);
export default mongoose.model("Attribute", AttributeSchema);