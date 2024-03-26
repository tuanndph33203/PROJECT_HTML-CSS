import { IProduct } from "@/interface/product";
import Joi from "joi";

export const productValidate = (product: IProduct) => {
    const schema = Joi.object({
        name: Joi.string().required().max(100).min(6),
        price: Joi.number().required().min(1000),
        category: Joi.string().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
        discount: Joi.number().required().min(0).max(100),
        inStock: Joi.number().required()
    });
    return schema.validate(product);
}
